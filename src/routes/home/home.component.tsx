import { Outlet } from "react-router-dom"
import SignatureCard from "../../components/reusable-material-components/signature-card/signature-card.component"

import "./home.styles.scss"

const Home = () => {
    return (
        <div className="HomeContainer">
            <SignatureCard/>
            <Outlet />
        </div>
    )
}

export default Home