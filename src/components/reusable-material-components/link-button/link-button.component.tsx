import { FC } from "react"
import './link-button.styles.scss'

type LinkButtonProps = {
    href: string;
    children: string;
}

const LinkButton: FC<LinkButtonProps> = ({href, children}) => {
    return (
        <a 
            className='PortfolioLink' 
            href={href}
            target="_blank" 
            rel="noreferrer" 
        >
                {children}
        </a>
    )
}

export default LinkButton