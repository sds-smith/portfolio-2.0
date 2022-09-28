import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import CertificationCard from '../certification-card/certification-card.component'
import { PortfolioContext } from "../../../contexts/portfolio-context"
import { featuredCertifications, defaultCertification, CertificationType } from '../../../assets/data/certifications.data'
import './credentials-snippet.styles.scss'

const CredentialsSnippet = () => {
    const navigate = useNavigate()
    const {setClickedCert} = useContext(PortfolioContext)
    // const goToPortfolio = (project: ProjectType) => {
        // setFeaturedProjectIndex(projects.indexOf(project))
        // navigate('portfolio')
    // }
    const goToCert = (certification: CertificationType) => {
        setClickedCert(certification)
        navigate('about')

        window.setTimeout(() => {
            setClickedCert(defaultCertification)
            navigate('/')
        }, 3000)
    }

    return (
        <div className='CredentialsSnippetContainer'>
            {
                featuredCertifications.slice(0, 2).map((certification) => (
                    <button 
                        onClick={() => goToCert(certification)} 
                        className='CertificationButton'
                    >
                        <CertificationCard certification={certification} />
                    </button>
                )) 
            }
        </div>
    )
}

export default CredentialsSnippet