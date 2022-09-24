import { useState, useEffect, useContext } from 'react'
import { ResponsiveContext } from '../../../contexts/responsive-context'
import './footer.styles.scss'

const Footer = () => {
    const {setMobileFeatured, setMobileAll, setMobileAbout, setMobileCertifications, activeTab} = useContext(ResponsiveContext)
    const [page, setPage] = useState('')

    useEffect(() => {
        if (activeTab.featured || activeTab.all) {
            setPage('portfolio')
        } else if (activeTab.about || activeTab.certifications) {
            setPage('about')
        } else {
            setPage('')
        }
    }, [activeTab])

    const footerButtons = [
        {
            'name' : 'Featured Project',
            'button_text' : 'FEATURED',
            'on_click' : setMobileFeatured,
            'active_tab' : activeTab.featured,
            'page' : 'portfolio'
        },
        {
            'name' : 'All Projects',
            'button_text' : 'ALL',
            'on_click' : setMobileAll,
            'active_tab' : activeTab.all,
            'page' : 'portfolio'
        },
        {
            'name' : 'About',
            'button_text' : 'ABOUT',
            'on_click' : setMobileAbout,
            'active_tab' : activeTab.about,
            'page' : 'about'
        },
        {
            'name' : 'Certifications',
            'button_text' : 'CERTIFICATIONS',
            'on_click' : setMobileCertifications,
            'active_tab' : activeTab.certifications,
            'page' : 'about'
        },
    ]

    return (
        <div className ='FooterContainer'>
            {footerButtons.filter(btn => btn.page === page).map((footerButton) => 
                <button 
                    className = {footerButton.active_tab  ? 'activeFooter' : '' }
                    key={footerButton.name} 
                    onClick={footerButton.on_click} 
                >
                    {footerButton.button_text}
                </button>
            )}
        </div>
    )
}

export default Footer