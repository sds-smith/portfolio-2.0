import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import PortfolioCard from "../../reusable-material-components/portfolio-card/portfolio-card.component"
import { PortfolioContext } from "../../../contexts/portfolio-context"
import { projects, ProjectType } from "../../../assets/data/projects.data"
import './portfolio-snippet.styles.scss'

const PortfolioSnippet = () => {
    const navigate = useNavigate()
    const {setFeaturedProjectIndex} = useContext(PortfolioContext)

    const goToPortfolio = (project: ProjectType) => {
        setFeaturedProjectIndex(projects.indexOf(project))
        navigate('portfolio')
    }

    return (
        <div className='PortfolioSnippetContainer'>
                        {
                projects.slice(0, 2).map((project) => (
                    <button 
                        onClick={() => goToPortfolio(project)} 
                        className='ProjectButton'
                    >
                        <PortfolioCard project={project} />
                    </button>
                )) 
            }
        </div>
    )
}

export default PortfolioSnippet