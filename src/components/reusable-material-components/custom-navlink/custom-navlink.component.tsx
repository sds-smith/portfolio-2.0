import { FC } from "react"
import { NavLink } from "react-router-dom"

import {NavLinkType} from '../../../assets/data/navLinks'

import './custom-navlink.styles.scss'

type CustomNavLinkProps = {navLink: NavLinkType}

const CustomNavLink: FC<CustomNavLinkProps> = ({navLink}) => {

    return (
        <NavLink end className={(navData) => navData.isActive ? 'NavLink active' : 'NavLink'} to={navLink.to}  >
            <div className='IconContainer'  >
                <img src={navLink.icon} alt={navLink.name}/>
            </div>
            <div className='NavLinkName'>{navLink.name}</div>
        </NavLink>
    )
}

export default CustomNavLink