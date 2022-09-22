import { FC } from 'react'

import PortfolioCard from '../../reusable-material-components/portfolio-card/portfolio-card.component'
import { projects } from '../../../assets/data/projects.data'
import './portfolio-feature-card.styles.scss'

type PortfolioFeatureCardProps = {
    featuredProjectIndex: number;
}
const PortfolioFeatureCard: FC<PortfolioFeatureCardProps> = ({featuredProjectIndex}) => {

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