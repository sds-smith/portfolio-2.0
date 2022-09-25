import { Dispatch, FC, SetStateAction, useContext } from "react"
import { ResponsiveContext } from "../../../contexts/responsive-context"
import { featuredCertifications } from "../../../assets/data/certifications.data"
import { CertificationType, defaultCertification } from "../../../assets/data/certifications.data"
import './certifications-sidebar.styles.scss'

type CertificationsSidebarProps = {
    setClickedCert: Dispatch<SetStateAction<CertificationType>>
}

const CertificationsSidebar: FC<CertificationsSidebarProps> = ({setClickedCert}) => {
    const {isMobile, setMobileAbout, setMobileCertifications} = useContext(ResponsiveContext)

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
            {
                featuredCertifications.map((certification) => (
                    <button 
                        key={certification.title}
                        onClick={() => enlargeCert(certification)} 
                        className='CertificateButton'
                    >
                        <div>{certification.title}</div>
                        <img src={certification.src} alt={certification.alt} />
                    </button>
                )) 
            }
        </div>
    )
}

export default CertificationsSidebar