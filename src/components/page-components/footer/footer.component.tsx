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
            'active_tab' : 'portfolio'
        },
        {
            'name' : 'All Projects',
            'button_text' : 'ALL',
            'on_click' : setMobileAll,
            'active_tab' : 'portfolio'
        },
        {
            'name' : 'About',
            'button_text' : 'ABOUT',
            'on_click' : setMobileAbout,
            'active_tab' : 'about'
        },
        {
            'name' : 'Certifications',
            'button_text' : 'CERTIFICATIONS',
            'on_click' : setMobileCertifications,
            'active_tab' : 'about'
        },
    ]

    return (
        <div className ='FooterContainer'>
            {footerButtons.filter(btn => btn.active_tab === page).map((footerButton) => 
                <button 
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