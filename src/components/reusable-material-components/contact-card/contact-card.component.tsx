
import ContactLink from '../contact-link/contact-link.component'

import { contactLinksData } from '../../../assets/data/contact-links.data'

import './contact-card.styles.scss'

const ContactCard = () => {
    return (
        <div className='ContactCardContainer'>
            {contactLinksData.map((contactLink) => 
                <ContactLink key={contactLink.id} contactLink={contactLink}/>
            )}   
        </div>
    )
}

export default ContactCard