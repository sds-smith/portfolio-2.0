import { FC, useContext } from "react"
import UdemyCourses from '../../../assets/media/udemy_courses.png'
import { ResponsiveContext } from "../../../contexts/responsive-context"
import './udemy-sidebar.styles.scss'

const UdemySidebar: FC = () => {
    const {isMobile} = useContext(ResponsiveContext)

    return (
        <div className={isMobile ? 'UdemySidebarContainer UdemySidebarMobile' : 'UdemySidebarContainer'}>
            <h3>View my Udemy Course</h3>
            <a className='ProjectButton' href='https://www.udemy.com/user/shawn-smith-2242/' target='_blank' rel="noreferrer">
                <img src={UdemyCourses} alt='Shawn Smith instructor profile on Udemy.com'/>
            </a>
        </div>
    )
}

export default UdemySidebar