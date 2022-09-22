import { FC, Dispatch, SetStateAction } from "react"
import PortfolioCard from "../../reusable-material-components/portfolio-card/portfolio-card.component"
import { projects } from "../../../assets/data/projects.data"
import './project-picker.styles.scss'

type ProjectPickerProps = {
    setFeaturedProjectIndex : Dispatch<SetStateAction<number>>;
} 

const ProjectPicker: FC<ProjectPickerProps> = ({setFeaturedProjectIndex}) => {

    return (
        <div className='ProjectPickerContainer'>
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