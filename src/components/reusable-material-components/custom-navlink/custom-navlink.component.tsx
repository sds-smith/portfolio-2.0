import { FC } from "react"
import { NavLink } from "react-router-dom"

import {NavLinkType} from '../../../assets/data/nav-links.data'

import './custom-navlink.styles.scss'

type CustomNavLinkProps = {
    navLink: NavLinkType;
    isMenuOpen: boolean;
    onClick: ()=>void;
}

const CustomNavLink: FC<CustomNavLinkProps> = ({isMenuOpen, navLink, onClick}) => {


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
            onClick={onClick}
            to={navLink.to}  
        >
            <div className='IconContainer'  >
                <img src={navLink.icon} alt={navLink.name}/>
            </div>
            <div className='NavLinkName'>{navLink.name}</div>
        </NavLink>
    )
}

export default CustomNavLink