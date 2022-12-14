
import AboutSnippet from '../../reusable-material-components/about-snippet/about-snippet.component'
import PortfolioSnippet from '../../reusable-material-components/portfolio-snippet/portfolio-snippet.component'
import CredentialsSnippet from '../../reusable-material-components/credentials-snippet/credentials-snippet.component'
import ContactCard from '../../reusable-material-components/contact-card/contact-card.component'

import './home-feature-card.styles.scss'

const HomeFeatureCard = () => {
    return (
        <div className='HomeCardContainer'>
            <h1>Shawn Smith</h1>
            <AboutSnippet source='about' index={0}/>
            <h2>Featured Projects</h2>
            <PortfolioSnippet />
            <h2>Featured Credentials</h2>
            <CredentialsSnippet />
            <h2>Connect</h2>
            <ContactCard parent='home feature card' />
        </div>
    )
}

export default HomeFeatureCard