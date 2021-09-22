import { Link } from 'react-router-dom';
import './Nav.scss';


const Nav = (props) => {
    return (
        <nav>
            <Link 
            to='/'
            style={{textDecoration: 'none', color: 'white'}}>
            <h1>Pooch-A-Medic
            </h1>
            </Link>

            <ul>

            <Link 
            className="about"
            to='/about'
            style={{textDecoration: 'none', color: 'white'}}
            >
            <li>About</li>
            </Link>

            <Link 
            to='/support'
            style={{textDecoration: 'none', color: 'white'}}
            >
            <li>Support</li>
            </Link>



            </ul>

        </nav>
    )
};

export default Nav;