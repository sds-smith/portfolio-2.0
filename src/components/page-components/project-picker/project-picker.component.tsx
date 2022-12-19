import { FC, useContext } from "react"
import PortfolioCard from "../../reusable-material-components/portfolio-card/portfolio-card.component"
import { PortfolioContext } from "../../../contexts/portfolio-context"
import { ResponsiveContext } from "../../../contexts/responsive-context"
import { projects, ProjectType } from "../../../assets/data/projects.data"
import './project-picker.styles.scss'

const ProjectPicker: FC = () => {
    const {setFeaturedProjectIndex} = useContext(PortfolioContext)
    const {isMobile, setMobileFeatured} = useContext(ResponsiveContext)

    const featureThisProject = (project: ProjectType) => {
        setFeaturedProjectIndex(projects.indexOf(project))
        isMobile && setMobileFeatured()
    }

    return (
        <div className={isMobile ? 'ProjectPickerContainer ProjectPickerMobile' : 'ProjectPickerContainer'}>
            <h2>{`Scroll ${projects.length} Projects`}</h2>
            {
                projects.map((project, index) => (
                    <button 
                        key={index}
                        onClick={()=>featureThisProject(project)} 
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