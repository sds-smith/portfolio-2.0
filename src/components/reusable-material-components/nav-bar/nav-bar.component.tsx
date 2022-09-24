
import CustomNavLink from "../custom-navlink/custom-navlink.component"
import { navLinks } from "../../../assets/data/nav-links.data"
import { useMediaQuery } from "../../../utils/custom-hooks/use-media-query"

import './nav-bar.styles.scss'

const NavBar = () => {
    const isMobile = useMediaQuery('(max-width: 1020px)')

    return ( 
        <div className='NavBar' style={{marginRight: isMobile ? 'unset' : '300px'}}>
            {navLinks.map((navLink) => 
                <CustomNavLink navLink={navLink} />)}
        </div>
    )
}

export default NavBar