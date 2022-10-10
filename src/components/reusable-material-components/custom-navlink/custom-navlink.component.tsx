import { FC, useContext } from "react"
import { NavLink } from "react-router-dom"

import {NavigationContext} from '../../../contexts/navigation-context'
import {NavLinkType} from '../../../assets/data/nav-links.data'

import './custom-navlink.styles.scss'

type CustomNavLinkProps = {
    navLink: NavLinkType;
}

const CustomNavLink: FC<CustomNavLinkProps> = ({navLink}) => {
    const {isMenuOpen, toggleNavBar} = useContext(NavigationContext)

    return (
        <NavLink 
            end 
            className={
                (navData) => navData.isActive ? 
                    isMenuOpen ?
                        'NavLink active open' : 
                        'NavLink active'
                :
                    isMenuOpen ?
                        'NavLink open' :
                        'NavLink'
            } 
            onClick={toggleNavBar}
            to={navLink.to}  
        >
            <div className='IconContainer'  >
                <img srcSet={navLink.icon} alt={navLink.name}/>
            </div>
            <div className='NavLinkName'>{navLink.name}</div>
        </NavLink>
    )
}

export default CustomNavLink