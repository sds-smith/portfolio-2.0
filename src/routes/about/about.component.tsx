import { useEffect, useContext, Fragment } from "react"

import AboutFeatureCard from "../../components/page-components/about-feature-card/about-feature-card.component"
import CertificationFeatureCard from "../../components/page-components/certification-feature-card/certification-feature-card.component"
import CertificationsSidebar from "../../components/page-components/certifications-sidebar/certifications-sidebar.component"

import { ResponsiveContext } from "../../contexts/responsive-context"
import { PortfolioContext } from "../../contexts/portfolio-context"
import './about.styles.scss'


const About = () => {
    const {isMobile, setMobileAbout, setDesktop, activeTab} = useContext(ResponsiveContext)
    const {clickedCert} = useContext(PortfolioContext)

    useEffect(() => {
        isMobile ? setMobileAbout() : setDesktop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobile])

    return (
            <div className={isMobile ? "AboutContainer AboutContainerMobile" : "AboutContainer"}>
                {  activeTab.about && (  
                    <Fragment>
                        {clickedCert.title ? (
                           <CertificationFeatureCard expires certification={clickedCert} />
                        ) : (
                            <AboutFeatureCard/>
                        )}
                    </Fragment>
                )}
                {activeTab.certifications && <CertificationsSidebar />}
            </div>
        
    )
}

export default About