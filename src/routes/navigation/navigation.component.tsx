import { useContext } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../../components/reusable-material-components/nav-bar/nav-bar.component"
import HamburgerMenu from "../../components/reusable-material-components/hamburger-menu/hamburger-menu.component"

import { ResponsiveContext } from "../../contexts/responsive-context"
import './navigation.styles.scss'

const Navigation = () => {
    const {isMobile} = useContext(ResponsiveContext)

    return (
        <div className="NavigationContainer" style={
            {
                position: isMobile ?  'fixed' : 'unset',
                maxHeight: isMobile ? '100vh' : 'unset'
            }
        }>
            <div className='Header' style={{backgroundColor: isMobile ? 'gray' : 'unset'}}>
                {isMobile ? (
                    <HamburgerMenu />    
                ) : (
                    <NavBar toggleNavBar={()=>{}} />
                )}
            </div>  
            <Outlet />
        </div>
    )
}

export default Navigation