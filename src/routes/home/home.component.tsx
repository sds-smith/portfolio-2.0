import { useEffect, useContext } from "react"
import HomeFeatureCard from "../../components/page-components/home-feature-card/home-feature-card.component"
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
            {activeView.outlet && <HomeFeatureCard />}
        </div>
    )
}

export default Home