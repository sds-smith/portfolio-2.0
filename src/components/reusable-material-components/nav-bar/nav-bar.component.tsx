import { FC, useContext } from "react"
import CustomNavLink from "../custom-navlink/custom-navlink.component"
import { navLinks } from "../../../assets/data/nav-links.data"
import { ResponsiveContext } from "../../../contexts/responsive-context"

import './nav-bar.styles.scss'

const NavBar: FC = () => {
    const {isMobile} = useContext(ResponsiveContext)

    return ( 
        <div className={isMobile ? 'NavBar NavBarMobile' : 'NavBar'}>
            {
                navLinks.map((navLink) => 
                    <CustomNavLink 
                        key={navLink.name} 
                        navLink={navLink} 
                    />) 
            }
        </div>
    )
}

export default NavBar