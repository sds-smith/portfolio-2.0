import { useContext } from "react"
import CustomNavLink from "../custom-navlink/custom-navlink.component"
import { navLinks } from "../../../assets/data/nav-links.data"
import { ResponsiveContext } from "../../../contexts/responsive-context"

import './nav-bar.styles.scss'

const NavBar = () => {
    const {isMobile} = useContext(ResponsiveContext)

    return ( 
        <div className='NavBar' style={{marginRight: isMobile ? 'unset' : '300px'}}>
            {navLinks.map((navLink) => 
                <CustomNavLink navLink={navLink} />)}
        </div>
    )
}

export default NavBar