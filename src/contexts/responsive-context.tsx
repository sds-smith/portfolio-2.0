import { createContext, useState, FC } from "react";
import { ResponsiveContextProps, ProviderProps } from "../utils/context.utils"; 
import { useMediaQuery } from "../utils/custom-hooks/use-media-query";


const desktopActiveView = {
    'signature_card' : true,
    'outlet' : true
}

const desktopActiveTab = {
    'featured' : true,
    'all' : true,
    'about' : true,
    'certifications' : true
}

const mobileHomeActiveView = {
    'signature_card' : true,
    'outlet' : false
}

const mobileAltActiveView = {
    'signature_card' : false,
    'outlet' : true
}

const mobileHomeActiveTab = {
    'featured' : false,
    'all' : false,
    'about' : false,
    'certifications' : false
}

const mobileFeaturedActiveTab = {
    'featured' : true,
    'all' : false,
    'about' : false,
    'certifications' : false
}

const mobileAllActiveTab = {
    'featured' : false,
    'all' : true,
    'about' : false,
    'certifications' : false
}

const mobileAboutActiveTab = {
    'featured' : false,
    'all' : false,
    'about' : true,
    'certifications' : false
}

const mobileCertificationsActiveTab = {
    'featured' : false,
    'all' : false,
    'about' : false,
    'certifications' : true
}

export const ResponsiveContext = createContext<ResponsiveContextProps>({
    isMobile: false,
    activeTab: desktopActiveTab,
    activeView: desktopActiveView,
    setDesktop: () => {},
    setMobileHome: () => {},
    setMobileFeatured: () => {},
    setMobileAll: () => {},
    setMobileAbout: () => {},
    setMobileCertifications: () => {}
})

export const ResponsiveProvider: FC<ProviderProps> = ({children}) => {
    const [activeTab, setActiveTab] = useState(desktopActiveTab)
    const [activeView, setActiveView] = useState(desktopActiveView)

    const isMobile = useMediaQuery('(max-width: 1020px)')

    const setDesktop = () => {
        setActiveTab(desktopActiveTab)
        setActiveView(desktopActiveView)
    }

    const setMobileHome = () => {
        setActiveTab(mobileHomeActiveTab)
        setActiveView(mobileHomeActiveView)
    }

    const setMobileFeatured = () => {
        setActiveTab(mobileFeaturedActiveTab)
        setActiveView(mobileAltActiveView)
    }

    const setMobileAll = () => {
        setActiveTab(mobileAllActiveTab)
        setActiveView(mobileAltActiveView)
    }

    const setMobileAbout = () => {
        setActiveTab(mobileAboutActiveTab)
        setActiveView(mobileAltActiveView)
    }

    const setMobileCertifications = () => {
        setActiveTab(mobileCertificationsActiveTab)
        setActiveView(mobileAltActiveView)
    }

    const value = { 
        isMobile,
        activeTab,
        activeView,
        setDesktop,
        setMobileHome,
        setMobileFeatured,
        setMobileAll,
        setMobileAbout,
        setMobileCertifications
    }

    return <ResponsiveContext.Provider value={value} >{children}</ResponsiveContext.Provider>
}