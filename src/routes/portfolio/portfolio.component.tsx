import { FC } from "react"
import PortfolioFeatureCard from "../../components/page-components/portfolio-feature-card/portfolio-feature-card.component"
import ProjectPicker from "../../components/page-components/project-picker/project-picker.component"


import'./portfolio.styles.scss'

const Portfolio: FC = () => {

    return (
        <div className="PortfolioContainer">
            <PortfolioFeatureCard />
            <ProjectPicker />
        </div>
    )
}

export default Portfolio