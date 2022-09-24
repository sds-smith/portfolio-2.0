import { useState, useEffect, useContext, Fragment } from "react"

import AboutFeatureCard from "../../components/page-components/about-feature-card/about-feature-card.component"
import CertificationFeatureCard from "../../components/page-components/certification-feature-card/certification-feature-card.component"
import CertificationsSidebar from "../../components/page-components/certifications-sidebar/certifications-sidebar.component"

import { ResponsiveContext } from "../../contexts/responsive-context"
import { defaultCertification } from "../../assets/data/certifications.data"
import './about.styles.scss'


const About = () => {
    const [clickedCert, setClickedCert] = useState(defaultCertification)
    const {isMobile, setMobileAbout, setDesktop, activeTab} = useContext(ResponsiveContext)

    useEffect(() => {
        isMobile ? setMobileAbout() : setDesktop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobile])

    return (
            <div className={isMobile ? "AboutContainer mobile" : "AboutContainer"}>
                {  activeTab.about && (  
                    <Fragment>
                        {clickedCert.title ? (
                           <CertificationFeatureCard certification={clickedCert} />
                        ) : (
                            <AboutFeatureCard/>
                        )}
                    </Fragment>
                )}
                {activeTab.certifications && <CertificationsSidebar setClickedCert={setClickedCert}/>}
            </div>
        
    )
}

export default About