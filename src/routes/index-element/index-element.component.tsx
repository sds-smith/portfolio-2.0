import { Outlet } from "react-router-dom"
import SignatureCard from "../../components/reusable-material-components/signature-card/signature-card.component"

import "./index-element.styles.scss"

const IndexElement = () => {
    return (
        <div className="IndexElementContainer">
            <SignatureCard/>
            <Outlet />
        </div>
    )
}

export default IndexElement