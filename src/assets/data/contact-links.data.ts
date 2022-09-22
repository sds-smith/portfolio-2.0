import EmailIcon from '../../assets/icons/mail-24black.png'
import PhoneIcon from '../../assets/icons/phone-24black.png'
import LinkedinIcon from '../../assets/icons/linkedin-24black.png'
import GithubIcon from '../../assets/icons/github-24black.png'

export type ContactLinkType = {
    href: string;
    id: string;
    src: any;
    alt: string;
}

export type ContactLinksData = ContactLinkType[]

export const contactLinksData: ContactLinksData = [
    {
        href : 'mailto:sds.smith24@gmail.com',
        id : 'email',
        src : EmailIcon,
        alt : 'email icon for sds.smith24@gmail.com'
    },    {
        href : 'https://www.linkedin.com/in/sds-smith/',
        id : 'linkedin',
        src : LinkedinIcon,
        alt : 'linkedin icon for linkedin.com/shawn-smith'
    },    {
        href : 'https://github.com/sds-smith',
        id : 'github',
        src : GithubIcon,
        alt : 'github icon for github.com/sds-smith'
    },    {
        href : 'tel:12156305599',
        id : 'phone',
        src : PhoneIcon,
        alt : 'phone icon for 215.630.5599'
    },
]
