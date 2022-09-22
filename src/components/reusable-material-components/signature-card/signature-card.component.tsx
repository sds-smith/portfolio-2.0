
import ProfilePic from '../../../assets/images/profile_pic.jpeg'

import './signature-card.styles.scss'

const SignatureCard = () => {
    return (
        <div className="SignatureCardContainer">
            <img src={ProfilePic} alt='portrait of Shawn Smith'/>
            <h3 className='SignatureText'>Shawn Smith</h3>
            <p className='SignatureText'>Frontend Developer | React.js</p>
            <p className='SignatureText'>Open-source Contributor</p>
        </div>
    )
}

export default SignatureCard