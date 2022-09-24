import { FC, useEffect, useContext } from "react"
import PortfolioFeatureCard from "../../components/page-components/portfolio-feature-card/portfolio-feature-card.component"
import ProjectPicker from "../../components/page-components/project-picker/project-picker.component"

import { ResponsiveContext } from "../../contexts/responsive-context"

import'./portfolio.styles.scss'

const Portfolio: FC = () => {
    const { isMobile, setMobileFeatured, setDesktop, activeTab } = useContext(ResponsiveContext)

    useEffect(() => {
        if (isMobile) {
            setMobileFeatured()
        } else {
            setDesktop()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobile])

    return (
        <div className={isMobile ? "PortfolioContainer PortfolioMobile" : "PortfolioContainer"}>
           {activeTab.featured && <PortfolioFeatureCard />}
            {activeTab.all && <ProjectPicker />}
        </div>
    )
}

export default Portfolio