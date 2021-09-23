import { useState } from 'react';

import onion from '../../resources/images/savannah-sweet-onion.jpeg';

import './FoodDetail.scss';

const FoodDetail = () => {
    const [toxicity, setToxicity] = useState(0);

    return (
        <div className="details">
            <div className="details__banner">
                <div className="details__banner__imgContainer">
                    <img src={onion} alt="Onions" className="details__banner__imgContainer__img" />
                </div>
                <p className="details__banner__poison">Poisonous</p>
                <h2 className="details__banner__name">Onions</h2>
                <i class="fas fa-bookmark details__banner__bookmark"></i>
            </div>
            <ul className="details__list">
                <li className="details__list__item">Onions aren't healthy for dogs.</li>
                <li className="details__list__item">However, onion toxicity depends on how much the dog consumes.</li>
                <li className="details__list__item">"Typically if a dog ingests only a small amount of onion, it should not cause any problems." -Rachel Hinder RV</li>
                <li className="details__list__item">However, she did caution that "the size of the dog also matters, small pieces of onions are a lot bigger problem for tiny 3-pound Yorkies than 200-pound Great Danes."</li>
            </ul>
            <div className="details__whiteLine"></div>
            <h2 className="details__toxicity">Toxicity Meter</h2>
            <div className="details__scale">
                <p className="details__scale__instructions">Move the scale to see toxicity level according to your pet's weight</p>
                <div className="details__scale__container">
                    <ul className="details__scale__container__weights">
                        <li className="details__scale__container__weights__item">40+ lbs</li>
                        <li className="details__scale__container__weights__item">30-40 lbs</li>
                        <li className="details__scale__container__weights__item">20-30 lbs</li>
                        <li className="details__scale__container__weights__item">15-20 lbs</li>
                        <li className="details__scale__container__weights__item">10-15 lbs</li>
                        <li className="details__scale__container__weights__item">5-10 lbs</li>
                        <li className="details__scale__container__weights__item">3-5 lbs</li>
                        <li className="details__scale__container__weights__item">1-2 lbs</li>
                    </ul>
                    <input type="range" className="details__scale__container__slider" min="0" max="90" value={toxicity} onChange={e => setToxicity(e.target.value)} />
                    <div className="details__scale__container__toxicBar"><div className="details__scale__container__toxicBar__highlight" style={{top: `${toxicity}%`}}></div></div>
                    
                    <ul className="details__scale__container__posionousList">
                        <li className="details__scale__container__posionousList__item">Poisonous</li>
                        <li className="details__scale__container__posionousList__item"><div className="details__scale__container__posionousList__item__div1"></div>Hazard</li>
                        <li className="details__scale__container__posionousList__item"><div className="details__scale__container__posionousList__item__div2"></div>Bad</li>
                        <li className="details__scale__container__posionousList__item"><div className="details__scale__container__posionousList__item__div3"></div>Irritant</li>
                        <li className="details__scale__container__posionousList__item"><div className="details__scale__container__posionousList__item__div4"></div>Safe</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default FoodDetail
