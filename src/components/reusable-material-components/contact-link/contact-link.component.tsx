import { FC } from "react";
import { ContactLinkType } from "../../../assets/data/contact-links.data"
import './contact-link.styles.scss'

type ContactLinkProps = {
    contactLink : ContactLinkType;
    id : string;
}

const ContactLink: FC<ContactLinkProps> = ({contactLink, id}) => {
    return (
        <a 
            className='ContactLink'
            href={contactLink.href}
            target='_blank'
            rel="noreferrer"
            id={id}
        >
            <img 
                className='icon' 
                srcSet={contactLink.src} 
                alt={contactLink.alt}
            />
        </a>

    )
}

export default ContactLink