import { FC } from "react"
import { Link } from "react-router-dom"
import './link-button.styles.scss'

type LinkButtonProps = {
    to: string;
    children: string;
}

const LinkButton: FC<LinkButtonProps> = ({to, children}) => {
    return (
        <Link 
            className='PortfolioLink' 
            style={{color: 'rgb(64, 62, 37)'}} 
            to={{ pathname: to }} 
            target="_blank" >
                {children}
        </Link>
    )
}

export default LinkButton