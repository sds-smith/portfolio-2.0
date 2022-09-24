import { FC, useContext } from "react"
import CustomNavLink from "../custom-navlink/custom-navlink.component"
import { navLinks } from "../../../assets/data/nav-links.data"
import { ResponsiveContext } from "../../../contexts/responsive-context"

import './nav-bar.styles.scss'

type NavBarProps = {
    isMenuOpen?: boolean;
    toggleNavBar: ()=>void;
}

const NavBar: FC<NavBarProps> = ({isMenuOpen=true, toggleNavBar}) => {
    const {isMobile} = useContext(ResponsiveContext)

    return ( 
        <div className='NavBar' style={{marginRight: isMobile ? 'unset' : '300px'}}>
            {
                navLinks.map((navLink) => 
                    <CustomNavLink 
                        key={navLink.name} 
                        navLink={navLink} 
                        isMenuOpen={isMenuOpen}
                        onClick={toggleNavBar}
                    />) 
            }
        </div>
    )
}

export default NavBar