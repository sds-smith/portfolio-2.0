import { FC } from 'react'
import ContactLink from '../contact-link/contact-link.component'

import { contactLinksData } from '../../../assets/data/contact-links.data'

import './contact-card.styles.scss'

type ContactCardProps = {
    parent: string
}

const ContactCard: FC<ContactCardProps> = ({parent}) => {
    return (
        <div className='ContactCardContainer'>
            {contactLinksData.map((contactLink) => 
                <ContactLink key={contactLink.id} id={`${parent} ${contactLink.id}`} contactLink={contactLink}/>
            )}   
        </div>
    )
}

export default ContactCard