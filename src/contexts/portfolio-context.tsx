import { createContext, useState, FC } from "react";
import { PortfolioContextProps, ProviderProps } from "../utils/context.utils"; 

export const PortfolioContext = createContext<PortfolioContextProps>({
    featuredProjectIndex: 0,
    setFeaturedProjectIndex: () => {}
})

export const PortfolioProvider: FC<ProviderProps> = ({children}) => {
    const [featuredProjectIndex, setFeaturedProjectIndex] = useState(0)

    const value = { 
        featuredProjectIndex,
        setFeaturedProjectIndex
    }

    return <PortfolioContext.Provider value={value} >{children}</PortfolioContext.Provider>
}