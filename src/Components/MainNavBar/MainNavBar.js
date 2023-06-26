import { NavLink } from 'react-router-dom';
import "./MainNavBar.scss"

const MainNavBar = () => {

    return (
        <>
            <nav className='main-navigation'>
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
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default MainNavBar