import { FC, useContext } from "react"

import CertificationCard from "../../reusable-material-components/certification-card/certification-card.component"

import { ResponsiveContext } from "../../../contexts/responsive-context"
import { PortfolioContext } from "../../../contexts/portfolio-context"
import { featuredCertifications } from "../../../assets/data/certifications.data"
import { CertificationType, defaultCertification } from "../../../assets/data/certifications.data"
import './certifications-sidebar.styles.scss'


const CertificationsSidebar: FC = () => {
    const {isMobile, setMobileAbout, setMobileCertifications} = useContext(ResponsiveContext)
    const {setClickedCert} = useContext(PortfolioContext)
    
    const enlargeCert = (certification: CertificationType) => {
        setClickedCert(certification)
        isMobile && setMobileAbout()

        window.setTimeout(() => {
            setClickedCert(defaultCertification)
            isMobile && setMobileCertifications()
        }, 3000)
    }

    return (
        <div className={isMobile ? 'CertificationsSidebarContainer CertificationsSidebarMobile' : 'CertificationsSidebarContainer'}>
            <h2>Certifications</h2>
            {
                featuredCertifications.map((certification) => (
                    <button 
                        key={certification.title}
                        onClick={() => enlargeCert(certification)} 
                        className='CertificateButton'
                    >
                        <CertificationCard certification={certification}/>
                    </button>
                )) 
            }
        </div>
    )
}

export default CertificationsSidebar