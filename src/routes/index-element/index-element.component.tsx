import { useContext } from "react"
import { Outlet } from "react-router-dom"
import Footer from "../../components/page-components/footer/footer.component"
import { ResponsiveContext } from "../../contexts/responsive-context"
import SignatureCard from "../../components/reusable-material-components/signature-card/signature-card.component"

import "./index-element.styles.scss"

const IndexElement = () => {
    const {isMobile, activeView, } = useContext(ResponsiveContext)

    return (
        <div className="IndexElementContainer">
            {activeView.signature_card && <SignatureCard/>}
            <Outlet />
            {isMobile && <Footer/>}
        </div>
    )
}

export default IndexElement