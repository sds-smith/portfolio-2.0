
import SignatureCard from "../../components/reusable-material-components/signature-card/signature-card.component"
import HomeCard from "../../components/page-components/home-card/home-card.component"

import "./home.styles.scss"

const Home = () => {
    return (
        <div className="HomeContainer">
            <SignatureCard/>
            <HomeCard/>
        </div>
    )
}

export default Home