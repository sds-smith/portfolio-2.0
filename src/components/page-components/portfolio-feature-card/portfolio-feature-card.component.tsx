import { FC, useContext } from 'react'

import PortfolioCard from '../../reusable-material-components/portfolio-card/portfolio-card.component'
import { PortfolioContext } from '../../../contexts/portfolio-context'
import { projects } from '../../../assets/data/projects.data'
import './portfolio-feature-card.styles.scss'

const PortfolioFeatureCard: FC = () => {
    const {featuredProjectIndex} = useContext(PortfolioContext)

    return (
        <div className='PortfolioFeatureContainer'>
            <h1>Featured Project</h1>
            <div className='CardContainer'>
                <PortfolioCard project={projects[featuredProjectIndex]} featured />
            </div>
        </div>
    )
}

export default PortfolioFeatureCard