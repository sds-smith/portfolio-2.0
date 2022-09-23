import { Dispatch, FC, SetStateAction, useMemo } from "react"
import { codecademyCertifications, udemyCertifications, miscCertifications } from "../../../assets/data/certifications.data"
import { CertificationType, defaultCertification } from "../../../assets/data/certifications.data"
import './certifications-sidebar.styles.scss'

type CertificationsSidebarProps = {
    setClickedCert: Dispatch<SetStateAction<CertificationType>>
}

const CertificationsSidebar: FC<CertificationsSidebarProps> = ({setClickedCert}) => {

    const featuredCertifications = useMemo(() => {
        return udemyCertifications.filter(cert => cert.feature === true)
        .concat(codecademyCertifications.filter(cert => cert.feature === true))
        .concat(miscCertifications.filter(cert => cert.feature === true))
    }, [])

    const enlargeCert = (certification: CertificationType) => {
        setClickedCert(certification)

        window.setTimeout(() => {
            setClickedCert(defaultCertification)
        }, 3000)
    }

    return (
        <div className='CertificationsSidebarContainer'>
                        {
                featuredCertifications.map((certification) => (
                    <button 
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