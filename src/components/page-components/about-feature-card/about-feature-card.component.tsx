import { useContext } from 'react'
import { ResponsiveContext } from '../../../contexts/responsive-context'
import { about, skills } from '../../../assets/data/about.data'
import './about-feature-card.styles.scss'

const AboutFeatureCard = () => {
    const {isMobile} = useContext(ResponsiveContext)

    return (
        <div className={isMobile ? 'AboutCardContainer mobile' : 'AboutCardContainer'}>
            <h1>About</h1>
            {about.slice(0,4).map((paragraph) => (
                <p>{paragraph}</p>
            ))}
            <ul>
                {skills.map((skill) => (
                    <li>{skill}</li>
                ))}
            </ul>
            {about.slice(4).map((paragraph) => (
                <p>{paragraph}</p>
            ))}
        </div>
    )
}

export default AboutFeatureCard