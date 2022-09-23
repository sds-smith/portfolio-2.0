
import AboutSnippet from '../../reusable-material-components/about-snippet/about-snippet.component'
import ContactCard from '../../reusable-material-components/contact-card/contact-card.component'
import './home-feature-card.styles.scss'

const HomeFeatureCard = () => {
    return (
        <div className='HomeCardContainer'>
            <h1>Shawn Smith</h1>
            <AboutSnippet source='about' index={0}/>
            <ContactCard />
        </div>
    )
}

export default HomeFeatureCard