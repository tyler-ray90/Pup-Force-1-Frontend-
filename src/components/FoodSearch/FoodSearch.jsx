import AutoComplete from 'components/AutoComplete/AutoComplete';
import { useState } from 'react';

import './FoodSearch.scss';

const FoodSearch = () => {
    const [isListOpen, setIsListOpen] = useState(false);
    const [pet, setPet] = useState('Cats');
    const [food, setFood] = useState('');

    const toggleListOpen = () => {
        isListOpen ? setIsListOpen(false) : setIsListOpen(true);
    }



    return (
        <div className="foodSearch">
            <h2 className="foodSearch__h2">Can</h2>
            {/* <select className="foodSearch__dropdown__select" id="pets">
                    <option className="foodSearch__option" value="Cats">Cats</option>
                    <option className="foodSearch__option" value="Dogs">Dogs</option>
                </select>  */}
            <div className="foodSearch__dropdown">
                {!isListOpen && 
                    <p className="foodSearch__dropdown__placeholder" 
                        onClick={toggleListOpen}>
                        {pet}
                    </p>
                }
                {isListOpen && 
                    <ul className="foodSearch__dropdown__list">
                        <li 
                            className="foodSearch__dropdown__list__item" 
                            onClick={() => {
                                toggleListOpen();
                                setPet('Cats');
                            }}>
                            Cats
                        </li>
                        <li 
                            className="foodSearch__dropdown__list__item" 
                            onClick={() => {
                                toggleListOpen();
                                setPet('Dogs')
                            }}>
                            Dogs
                        </li>
                    </ul>
                }
            </div>
            <div className="foodSearch__grayLine"></div>
            <h2 className="foodSearch__h2">Eat</h2>
            <AutoComplete placeholder="Onions"/>
            <div className="foodSearch__grayLine"></div>
            <button className='foodSearch__button'>?</button>
        </div>
    )
}

export default FoodSearch
