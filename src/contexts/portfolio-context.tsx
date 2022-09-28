import { createContext, useState, FC } from "react";
import { defaultCertification } from "../assets/data/certifications.data";
import { PortfolioContextProps, ProviderProps } from "../utils/context.utils"; 

export const PortfolioContext = createContext<PortfolioContextProps>({
    featuredProjectIndex: 0,
    setFeaturedProjectIndex: () => {},
    clickedCert: defaultCertification,
    setClickedCert: () => {}
})

export const PortfolioProvider: FC<ProviderProps> = ({children}) => {
    const [featuredProjectIndex, setFeaturedProjectIndex] = useState(0)
    const [clickedCert, setClickedCert] = useState(defaultCertification)

    const value = { 
        featuredProjectIndex,
        setFeaturedProjectIndex,
        clickedCert,
        setClickedCert
    }

    return <PortfolioContext.Provider value={value} >{children}</PortfolioContext.Provider>
}