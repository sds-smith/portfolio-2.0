import { FC, Fragment } from "react"
import LinkButton from "../link-button/link-button.component"
import { ProjectType } from "../../../assets/data/projects.data"
import './portfolio-card.styles.scss'

type PortfolioCardProps = {
    project: ProjectType;
    featured?: boolean;
}

const PortfolioCard: FC<PortfolioCardProps> = ({project, featured}) => {
    return (
        <div 
            className='PortfolioCardContainer'
        >
            <img src={project.background_image} alt={project.id} />
            <h2>{project.heading_title}</h2>
            <h4>{project.heading_subtitle}</h4>
            {featured && 
                <Fragment>
                    <p>{project.description}</p>
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