import { useEffect, useContext, Fragment } from "react"
import HomeFeatureCard from "../../components/page-components/home-feature-card/home-feature-card.component"
import UdemySidebar from "../../components/page-components/udemy-sidebar/udemy-sidebar.component"
import { ResponsiveContext } from "../../contexts/responsive-context"

import "./home.styles.scss"

const Home = () => {
    const {isMobile, setDesktop, setMobileHome, activeView} = useContext(ResponsiveContext)

    useEffect(() => {
        if (isMobile) {
            setMobileHome()
        } else {
            setDesktop()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobile])

    return ( 
        <div className="HomeContainer">
            {activeView.outlet && 
            <Fragment>
                <HomeFeatureCard /> 
                <UdemySidebar />
            </Fragment>
                
            }
        </div>
    )
}

export default Home