
import SignatureCard from "../../components/reusable-material-components/signature-card/signature-card.component"
import HomeFeatureCard from "../../components/page-components/home-feature-card/home-feature-card.component"

import "./home.styles.scss"

const Home = () => {
    return (
        <div className="HomeContainer">
            <SignatureCard/>
            <HomeFeatureCard/>
        </div>
    )
}

export default Home