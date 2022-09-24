import { Outlet } from "react-router-dom"
import NavBar from "../../components/reusable-material-components/nav-bar/nav-bar.component"
import HamburgerMenu from "../../components/reusable-material-components/hamburger-menu/hamburger-menu.component"
import { useMediaQuery } from "../../utils/custom-hooks/use-media-query"
import './navigation.styles.scss'

const Navigation = () => {
    const isMobile = useMediaQuery('(max-width: 1020px)')

    return (
        <div className="NavigationContainer">
            <div className='Header'>
                {isMobile ? (
                    <HamburgerMenu />    
                ) : (
                    <NavBar />
                )}
            </div>  
            <Outlet />
        </div>
    )
}

export default Navigation