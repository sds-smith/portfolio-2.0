
import { Link } from 'react-router-dom'

import ContactCard from '../contact-card/contact-card.component'
import ProfilePic from '../../../assets/media/profile_pic.jpeg'
import './signature-card.styles.scss'

const SignatureCard = () => {

    return (
        <Link to='about' className="SignatureCardContainer">
            <img className='ProfilePic' src={ProfilePic} alt='portrait of Shawn Smith'/>
            <div className='Signature'>
                <h3 className='SignatureText'>Shawn Smith</h3>
                <p className='SignatureText'>Frontend Developer | React.js</p>
                <p className='SignatureText'>Open-source Contributor</p>
            </div>
            <ContactCard />
        </Link>
    )
}

export default SignatureCard