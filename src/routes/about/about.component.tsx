import { useState } from "react"

import AboutFeatureCard from "../../components/page-components/about-feature-card/about-feature-card.component"
import CertificationFeatureCard from "../../components/page-components/certification-feature-card/certification-feature-card.component"
import CertificationsSidebar from "../../components/page-components/certifications-sidebar/certifications-sidebar.component"
import { defaultCertification } from "../../assets/data/certifications.data"
import './about.styles.scss'


const About = () => {
    const [clickedCert, setClickedCert] = useState(defaultCertification)

    return (
            <div className="AboutContainer">
                {clickedCert.title ? (
                   <CertificationFeatureCard certification={clickedCert} />
                ) : (
                    <AboutFeatureCard/>
                )}
                <CertificationsSidebar setClickedCert={setClickedCert}/>
            </div>
        
    )
}

export default About