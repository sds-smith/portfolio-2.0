import { useContext } from 'react'
import { ResponsiveContext } from '../../../contexts/responsive-context'
import { about, skills } from '../../../assets/data/about.data'
import './about-feature-card.styles.scss'

const AboutFeatureCard = () => {
    const {isMobile} = useContext(ResponsiveContext)

    return (
        <div className={isMobile ? 'AboutCardContainer AboutCardMobile' : 'AboutCardContainer'}>
            <h1>About</h1>
            {about.slice(0,4).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            {about.slice(4).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    )
}

export default AboutFeatureCard