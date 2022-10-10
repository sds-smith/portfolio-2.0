import { FC, useContext } from "react"
import UdemyCourses from '../../../assets/media/udemy_courses.png'
import { ResponsiveContext } from "../../../contexts/responsive-context"
import './udemy-sidebar.styles.scss'

const UdemySidebar: FC = () => {
    const {isMobile} = useContext(ResponsiveContext)

    return (
        <div className={isMobile ? 'UdemySidebarContainer UdemySidebarMobile' : 'UdemySidebarContainer'}>
            <h2>View my Udemy Course</h2>
            <a className='ProjectButton' href='https://www.udemy.com/course/react-basics-for-developers/' target='_blank' rel="noreferrer">
                <img src={UdemyCourses} alt='Shawn Smith instructor profile on Udemy.com'/>
            </a>
        </div>
    )
}

export default UdemySidebar