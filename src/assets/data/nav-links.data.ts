import { NavLinkProps } from 'react-router-dom'
import home from '../../assets/icons/home-page-24black.png'
import portfolio from '../../assets/icons/briefcase-24black.png'
import about from '../../assets/icons/male-user-24black.png'
import contact from '../../assets/icons/at-sign-24black.png'

export type NavLinkType = {
    name : string;
    to : string;
    icon : any;
} & NavLinkProps

type NavLinks = NavLinkType[]

export const navLinks: NavLinks = [
    {
        name : 'HOME',
        to : '/',
        icon : home
    },
    {
        name : 'PORTFOLIO',
        to : '/portfolio',
        icon : portfolio
    },
    {
        name : 'ABOUT',
        to : '/about',
        icon : about
    },
    {
        name : 'CONTACT',
        to : '/contact',
        icon : contact
    }
]