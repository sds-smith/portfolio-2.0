import { useState } from "react"
import PortfolioFeatureCard from "../../components/page-components/portfolio-feature-card/portfolio-feature-card.component"
import ProjectPicker from "../../components/page-components/project-picker/project-picker.component"


import'./portfolio.styles.scss'


const Portfolio = () => {
    const [featuredProjectIndex, setFeaturedProjectIndex] = useState(0)

    return (
        <div className="PortfolioContainer">
            <PortfolioFeatureCard featuredProjectIndex={featuredProjectIndex} />
            <ProjectPicker setFeaturedProjectIndex={setFeaturedProjectIndex} />
        </div>
    )
}

export default Portfolio