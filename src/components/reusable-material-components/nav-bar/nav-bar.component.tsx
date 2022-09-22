
import CustomNavLink from "../custom-navlink/custom-navlink.component"
import { navLinks } from "../../../assets/data/navLinks"

import './nav-bar.styles.scss'

const NavBar = () => {


    return (
        <div className='NavBar'>
            {navLinks.map((navLink) => 
                <CustomNavLink navLink={navLink} />)}
        </div>
    )
}

export default NavBar