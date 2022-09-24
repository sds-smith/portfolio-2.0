import { useContext, Fragment } from "react"
import { Outlet } from "react-router-dom"
import Footer from "../../components/page-components/footer/footer.component"
import { ResponsiveContext } from "../../contexts/responsive-context"
import SignatureCard from "../../components/reusable-material-components/signature-card/signature-card.component"
import { about } from "../../assets/data/about.data"
import "./index-element.styles.scss"

const IndexElement = () => {
    const {isMobile, activeView } = useContext(ResponsiveContext)

    return (
        <div className="IndexElementContainer">
            {activeView.signature_card && 
                <div className={isMobile ? 'SignatureCardWrapper SignatureWrapperMobile' : 'SignatureCardWrapper'}>
                    <SignatureCard/>
                    {isMobile && 
                    <Fragment>
                        <p className='Quote' >{`"${about[0]}"`}</p>    
                        <p className='Quote' >{`"${about[about.length-1]}"`}</p>    
                    </Fragment>
                    }
                </div>
            }
            <Outlet />
            {isMobile && <Footer/>}
        </div>
    )
}

export default IndexElement