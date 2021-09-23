import {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Nav.scss';
import { IconContext } from 'react-icons';

import logo from '../../resources/images/logo.png';

import { SidebarData } from './SidebarData';

function Nav() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <div className="top-logo">
                    <img className="top-logo-img" src={logo} alt="logo of dog sleeping"/>
                </div> 
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
             <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                      <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
             </ul>  
             <div className="nav-logo">
                <img className="nav-logo-img" src={logo} alt="logo of dog sleeping"/>
                <p className="nav-logo-text">Can Spot Eat</p>
            </div> 
            </nav>
            </IconContext.Provider>
        </>
    )
};

export default Nav;