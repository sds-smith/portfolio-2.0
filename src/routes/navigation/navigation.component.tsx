import { Outlet } from "react-router-dom"
import NavBar from "../../components/reusable-material-components/nav-bar/nav-bar.component"
import './navigation.styles.scss'

const Navigation = () => {
    return (
        <div className="NavigationContainer">
            <div className='Header'>
                <NavBar />
            </div>  
            <Outlet />
        </div>
    )
}

export default Navigation