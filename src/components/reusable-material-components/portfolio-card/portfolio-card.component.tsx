import { FC, Fragment } from "react"
import LinkButton from "../link-button/link-button.component"
import { ProjectType } from "../../../assets/data/projects.data"
import './portfolio-card.styles.scss'

type PortfolioCardProps = {
    project: ProjectType;
    featured?: boolean;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ project, featured}) => {
    return (
        <div 
            className='PortfolioCardContainer'
        >
            <img srcSet={project.background_image} alt={project.id} />
            <h2 className='textContent'>{project.heading_title}</h2>
            <h3 className='textContent'>{project.heading_subtitle}</h3>
            {featured && 
                <Fragment>
                    <p className='textContent'>{project.description}</p>
                    <div className='ButtonContainer'>
                         <LinkButton href={ project.live_link} >Open App</LinkButton>
                         <LinkButton href={ project.readme_link} >About</LinkButton>
                    </div > 
                </Fragment>
            }
        
        </div>
    )
}

export default PortfolioCard