import AutoComplete from 'components/AutoComplete/AutoComplete';
import { useEffect, useState } from 'react';

import './FoodSearch.scss';

const FoodSearch = ({ data, addOrUpdate }) => {
    const [isListOpen, setIsListOpen] = useState(false);
    const [foodInput, setFoodInput] = useState('');
    const [foodList, setFoodList] = useState([]);
    const [animalList, setAnimalList] = useState([]);

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

    const loaded = () => {
        return (
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
                            {animalList[0]}
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
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="foodSearch__grayLine"></div>
                <h2 className="foodSearch__h2">Eat</h2>
                <AutoComplete
                    placeholder={data[0].food}
                    suggestions={foodList}
                    input={foodInput}
                    setInput={setFoodInput}
                />
                <div className="foodSearch__grayLine"></div>
                <button className="foodSearch__button">?</button>
            </div>
        );
    };

    const loading = () => <div>mock outline of component while loading...</div>;

    return data ? loaded() : loading();
};

export default FoodSearch;
