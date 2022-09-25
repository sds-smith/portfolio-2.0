import { useEffect, useContext } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../../components/reusable-material-components/nav-bar/nav-bar.component"
import HamburgerMenu from "../../components/reusable-material-components/hamburger-menu/hamburger-menu.component"

import { ResponsiveContext } from "../../contexts/responsive-context"
import {NavigationContext} from '../../contexts/navigation-context'

import './navigation.styles.scss'

const Navigation = () => {
    const {isMobile} = useContext(ResponsiveContext)
    const {setIsMenuOpen} = useContext(NavigationContext)

    useEffect(() => {
        setIsMenuOpen(!isMobile)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isMobile])

    return (
        <div className={isMobile ? "NavigationContainer NavigationMobile" : "NavigationContainer"}>
            <div className={isMobile ? 'Header' : 'Header'}>
                <NavBar />
                {isMobile && <HamburgerMenu />}
            </div>  
            <Outlet />
        </div>
    )
}

export default Navigation