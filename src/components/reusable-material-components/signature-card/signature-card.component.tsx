
import { Link } from 'react-router-dom'

import ContactCard from '../contact-card/contact-card.component'
import ProfilePic from '../../../assets/media/profile_pic.jpeg'
import './signature-card.styles.scss'

const SignatureCard = () => {

    return (
        <div className="SignatureCardContainer">
            <Link to='about' className='AboutLink' >
               <img className='ProfilePic' src={ProfilePic} alt='portrait of Shawn Smith'/>
               <div className='Signature'>
                   <h2 className='SignatureText'>Shawn Smith</h2>
                   <p className='SignatureText'>Frontend Developer | React.js</p>
                   <p className='SignatureText'>Open-source Contributor</p>
               </div>
            </Link>
            <ContactCard parent='signature card' />
        </div>

    )
}

export default SignatureCard