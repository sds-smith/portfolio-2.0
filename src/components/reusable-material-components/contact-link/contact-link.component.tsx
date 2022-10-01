import { FC } from "react";
import { ContactLinkType } from "../../../assets/data/contact-links.data"
import './contact-link.styles.scss'

type ContactLinkProps = {
    contactLink : ContactLinkType;
}

const ContactLink: FC<ContactLinkProps> = ({contactLink}) => {
    return (
        <a 
            className='ContactLink'
            href={contactLink.href}
            target='_blank'
            rel="noreferrer"
            id={contactLink.id}
        >
            <img 
                className='icon' 
                src={contactLink.src} 
                alt={contactLink.alt}
            />
        </a>

    )
}

export default ContactLink