import { Outlet } from "react-router-dom"
import { useMediaQuery } from "../../utils/custom-hooks/use-media-query"
import SignatureCard from "../../components/reusable-material-components/signature-card/signature-card.component"

import "./index-element.styles.scss"

const IndexElement = () => {
    const isMobile = useMediaQuery('(max-width: 1020px)')

    return (
        <div className="IndexElementContainer">
            {!isMobile && <SignatureCard/>}
            <Outlet />
        </div>
    )
}

export default IndexElement