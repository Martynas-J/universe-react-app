import { NavLink } from 'react-router-dom';
import "./MainNavBar.scss"
import { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';

const MainNavBar = ({ isHomePage }) => {
    const [menuOn, setMenuOn] = useState(false)
    const addFormHandler = () => {
        setMenuOn(prevState => !prevState)
    }
    return (
        <nav className={isHomePage ? 'main-navigation home-page' : 'main-navigation'}>
            <ul className='nav-list'>
                <li className='navigation-item'>
                    <NavLink to='/' className='navigation-link'>Home</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/systems' className='navigation-link'>Systems</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/stars' className='navigation-link'>Stars</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/planets' className='navigation-link'>Planets</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/discoverers' className='navigation-link'>Discoverers</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/gallery' className='navigation-link'>Gallery</NavLink>
                </li>{menuOn ? <li><MenuItem /></li> : ""}
                <li>
                    <button className='logo-button' onClick={addFormHandler}>
                        <img className='logo' src='https://icon-library.com/images/hamburger-menu-icon-svg/hamburger-menu-icon-svg-16.jpg'></img>
                    </button>
                </li>

            </ul>
        </nav>
    )
}

export default MainNavBar