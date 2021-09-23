import { Link } from 'react-router-dom';

import rice from '../../resources/images/rice.png';
import blueberries from '../../resources/images/blueberries.png';
import chicken from '../../resources/images/chicken.png';
import avocado from '../../resources/images/avocado.png';
import bones from '../../resources/images/bones.png';
import potatoes from '../../resources/images/potatoes.png';
import chocolate from '../../resources/images/chocolate.png';
import grapes from '../../resources/images/grapes.png';
import onions from '../../resources/images/onion.png';
import carrots from '../../resources/images/carrots.png';
import lettuce from '../../resources/images/lettuce.png';
import eggs from '../../resources/images/eggs.png';
import tomatoes from '../../resources/images/tomatoes.png';
import peaches from '../../resources/images/peaches.png';
import mushrooms from '../../resources/images/mushrooms.png';
import almonds from '../../resources/images/almonds.png';



import './TrendingFoods.scss';

const TrendingFoods = () => {
    return (
        <div className="trending">
            <h1 className="trending__title">Trending Foods</h1>
            <div className="trending__whiteLine"></div>
            <div className="trending__section">
                <h2 className="trending__section__title">Safe To</h2>
                <div className="trending__section__container">
                    <div className="trending__section__container__card green">
                        <img src={rice} alt="rice" className="trending__section__container__card__img"/>
                        <p className="trending__section__container__card__title">Rice</p>
                    </div>
                    <div className="trending__section__container__card green">
                        <img src={blueberries} alt="blueberries" className="trending__section__container__card__img"/>
                        <p className="trending__section__container__card__title">Blueberries</p>
                    </div>
                    <div className="trending__section__container__card green">
                        <img src={chicken} alt="chicken" className="trending__section__container__card__img"/>
                        <p className="trending__section__container__card__title">Chicken</p>
                    </div>
                    <div className="trending__section__container__card green">
                        <img src={eggs} alt="eggs" className="trending__section__container__card__img" style={{width: '60px'}}/>
                        <p className="trending__section__container__card__title">Eggs</p>
                    </div>
                    <div className="trending__section__container__card green">
                        <img src={carrots} alt="carrots" className="trending__section__container__card__img"/>
                        <p className="trending__section__container__card__title">Carrots</p>
                    </div>
                </div>
            </div>
            <div className="trending__section">
                <h2 className="trending__section__title">Irritants</h2>
                <div className="trending__section__container">
                    <div className="trending__section__container__card blue">
                        <img src={avocado} alt="avocado" className="trending__section__container__card__img"/>
                        <p className="trending__section__container__card__title">Avocado</p>
                    </div>
                    <div className="trending__section__container__card blue">
                        <img src={bones} alt="bones" className="trending__section__container__card__img"/>
                        <p className="trending__section__container__card__title">Bones</p>
                    </div>
                    <div className="trending__section__container__card blue">
                        <img src={potatoes} alt="potatoes" className="trending__section__container__card__img"/>
                        <p className="trending__section__container__card__title">Potatoes</p>
                    </div>
                    <div className="trending__section__container__card blue">
                        <img src={tomatoes} alt="tomatoes" className="trending__section__container__card__img"/>
                        <p className="trending__section__container__card__title">Tomatoes</p>
                    </div>
                    <div className="trending__section__container__card blue">
                        <img src={peaches} alt="peaches" className="trending__section__container__card__img"/>
                        <p className="trending__section__container__card__title">Peaches</p>
                    </div>
                </div>
            </div>
            <div className="trending__section">
                <h2 className="trending__section__title">Poison</h2>
                <div className="trending__section__container" style={{width: '150%'}}>
                    <div className="trending__section__container__card purple">
                        <img src={chocolate} alt="chocolate" className="trending__section__container__card__img"/>
                        <p className="trending__section__container__card__title">Chocolate</p>
                    </div>
                    <div className="trending__section__container__card purple">
                        <img src={grapes} alt="grapes" className="trending__section__container__card__img"/>
                        <p className="trending__section__container__card__title">Grapes</p>
                    </div>
                    <Link to="/details">
                    <div className="trending__section__container__card purple">
                        <img src={onions} alt="onions" className="trending__section__container__card__img"/>
                        <p className="trending__section__container__card__title">Onions</p>
                    </div>
                    </Link>
                    <div className="trending__section__container__card purple">
                        <img src={mushrooms} alt="mushrooms" className="trending__section__container__card__img"/>
                        <p className="trending__section__container__card__title">Mushrooms</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingFoods
