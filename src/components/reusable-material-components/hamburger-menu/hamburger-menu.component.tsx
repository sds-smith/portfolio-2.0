import { useState } from 'react'
import NavBar from '../nav-bar/nav-bar.component'
import hamburgerMenu from '../../../assets/icons/hamburger-menu-24black.png'
import closeMenu from '../../../assets/icons/close-24black.png'

import './hamburger-menu.styles.scss'

const HamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleNavBar = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='HamburgerMenuContainer'>
            <NavBar isMenuOpen={isMenuOpen} toggleNavBar={toggleNavBar} />
            <button className='HamburgerButton' onClick={toggleNavBar}>
                <img src={isMenuOpen ? closeMenu : hamburgerMenu} alt='hamburger menu icon' />
            </button>
        </div>

    )
}

export default HamburgerMenu