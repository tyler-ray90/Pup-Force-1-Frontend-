import Contribute from 'components/Contribute/Contribute';
import { data as dataAtom } from 'atoms';
import AutoComplete from 'components/AutoComplete/AutoComplete';
import {
    waitingString,
    isEdibleString,
    isNotEdibleString,
} from 'constants/displayStrings';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { findResult } from 'utils.js/parse';
import './FoodSearch.scss';
import { Link } from 'react-router-dom';

const FoodSearch = (props) => {
    const [data] = useRecoilState(dataAtom);
    const [isListOpen, setIsListOpen] = useState(false);
    const [foodInput, setFoodInput] = useState('');
    const [foodList, setFoodList] = useState([]);
    const [animalList, setAnimalList] = useState([]);
    const [result, setResult] = useState({ answer: waitingString });

    const toggleListOpen = () => {
        isListOpen ? setIsListOpen(false) : setIsListOpen(true);
    };

    useEffect(() => {
        if (data) {
            const foodList = [];
            let animalList = [];
            data.forEach((food) => {
                foodList.push(food.food);
                Object.values(food.data).forEach((animal) => {
                    animalList.push(animal.animal);
                });
            });
            animalList = [...new Set(animalList)];
            setFoodList(foodList);
            setAnimalList(animalList);
        }
    }, [data]);

    useEffect(() => {
        if (
            data &&
            foodInput !== '' &&
            animalList.length !== 0 &&
            !isListOpen
        ) {
            setResult(
                findResult({
                    data,
                    selectedFood: foodInput,
                    selectedAnimal: animalList[0],
                })
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, foodInput, animalList, isListOpen]);

    const handleAnimalSelection = (e) => {
        e.preventDefault();
        const selection = e.target.firstChild.data;
        const updatedAnimalList = [...animalList];
        updatedAnimalList.splice(
            updatedAnimalList.findIndex((animal) => animal === selection),
            1
        );
        updatedAnimalList.unshift(selection);
        setAnimalList(updatedAnimalList);
    };

    return data ? (
        <div className="foodSearch">
            <h2 className="foodSearch__h2">Can</h2>
            {/* <select className="foodSearch__dropdown__select" id="pets">
                    <option className="foodSearch__option" value="Cats">Cats</option>
                    <option className="foodSearch__option" value="Dogs">Dogs</option>
                </select>  */}
            <div className="foodSearch__dropdown">
                {!isListOpen && (
                    <p
                        className="foodSearch__dropdown__placeholder"
                        onClick={toggleListOpen}
                    >
                        {animalList[0] && animalList[0] !== ''
                            ? `${animalList[0]}s`
                            : 'server down!'}
                    </p>
                )}

                {isListOpen && (
                    <ul className="foodSearch__dropdown__list">
                        {animalList.map((animal, i) => (
                            <li
                                key={i}
                                className="foodSearch__dropdown__list__item"
                                onClick={(e) => {
                                    toggleListOpen();
                                    handleAnimalSelection(e);
                                }}
                            >
                                {animal}
                                <div className="foodSearch__dropdown__list__blackLine"></div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="foodSearch__grayLine"></div>
            <h2 className="foodSearch__h2">eat</h2>
            <AutoComplete
                placeholder={data[0]?.food}
                suggestions={foodList}
                input={foodInput}
                setInput={setFoodInput}
            />
            <div className="foodSearch__grayLine foodSearch__extra"></div>
            <div className="foodSearch__button">{result.answer}</div>
            {[isEdibleString, isNotEdibleString].includes(result.answer) ? (
                <div>
                    <Link to={`/results/${foodInput}/${animalList[0]}`}>
                        Learn more about {animalList[0]} and {foodInput}
                    </Link>
                </div>
            ) : (
                <Contribute
                    currentAnimal={animalList[0]}
                    currentFood={foodInput}
                />
            )}
        </div>
    ) : (
        <></>
    );
};

export default FoodSearch;
