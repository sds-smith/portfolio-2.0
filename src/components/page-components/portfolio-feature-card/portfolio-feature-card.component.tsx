import { FC, useContext } from 'react'

import PortfolioCard from '../../reusable-material-components/portfolio-card/portfolio-card.component'
import { PortfolioContext } from '../../../contexts/portfolio-context'
import { ResponsiveContext } from '../../../contexts/responsive-context'
import { projects } from '../../../assets/data/projects.data'
import './portfolio-feature-card.styles.scss'

const PortfolioFeatureCard: FC = () => {
    const {featuredProjectIndex} = useContext(PortfolioContext)
    const {isMobile} = useContext(ResponsiveContext)

    return (
        <div className={isMobile ? 'PortfolioFeatureContainer PortfolioFeatureMobile' : 'PortfolioFeatureContainer'}>
            <h1>Featured Project</h1>
            <div className='CardContainer'>
                <PortfolioCard project={projects[featuredProjectIndex]} featured />
            </div>
        </div>
    )
}

export default PortfolioFeatureCard