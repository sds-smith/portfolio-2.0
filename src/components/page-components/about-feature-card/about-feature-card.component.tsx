
import { about, skills } from '../../../assets/data/about.data'
import './about-feature-card.styles.scss'

const AboutFeatureCard = () => {
    return (
        <div className='AboutCardContainer'>
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