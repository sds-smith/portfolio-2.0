import { useContext } from 'react'
import hamburgerMenu from '../../../assets/icons/hamburger-menu-24black.png'
import closeMenu from '../../../assets/icons/close-24black.png'

import { NavigationContext } from '../../../contexts/navigation-context'

import './hamburger-menu.styles.scss'

const HamburgerMenu = () => {
    const {isMenuOpen, toggleNavBar} = useContext(NavigationContext)

    return (
        <div className='HamburgerMenuContainer'>
            <button className='HamburgerButton' onClick={toggleNavBar}>
                <img srcSet={isMenuOpen ? closeMenu : hamburgerMenu} alt='hamburger menu icon' />
            </button>
        </div>

    )
}

export default HamburgerMenu