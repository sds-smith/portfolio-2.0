import { FC, useContext } from "react"
import PortfolioCard from "../../reusable-material-components/portfolio-card/portfolio-card.component"
import { PortfolioContext } from "../../../contexts/portfolio-context"
import { ResponsiveContext } from "../../../contexts/responsive-context"
import { projects } from "../../../assets/data/projects.data"
import './project-picker.styles.scss'

const ProjectPicker: FC = () => {
    const {setFeaturedProjectIndex} = useContext(PortfolioContext)
    const {isMobile} = useContext(ResponsiveContext)

    return (
        <div className={isMobile ? 'ProjectPickerContainer mobile' : 'ProjectPickerContainer'}>
                        {
                projects.map((project) => (
                    <button 
                        onClick={()=>setFeaturedProjectIndex(projects.indexOf(project))} 
                        className='ProjectButton'
                    >
                        <PortfolioCard project={project} />
                    </button>
                )) 
            }
        </div>
    )
}

export default ProjectPicker