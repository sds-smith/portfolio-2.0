import { useContext, createContext, useState, FC } from "react";
import { ResponsiveContext } from "./responsive-context";
import { NavigationContextProps, ProviderProps } from "../utils/context.utils"; 

export const NavigationContext = createContext<NavigationContextProps>({
    isMenuOpen: true,
    setIsMenuOpen: () => {},
    toggleNavBar: () => {}
})

export const NavigationProvider: FC<ProviderProps> = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(true)

    const {isMobile} = useContext(ResponsiveContext)

    const toggleNavBar = () => {
        isMobile && setIsMenuOpen(!isMenuOpen)
    }

    const value = { 
        isMenuOpen,
        setIsMenuOpen,
        toggleNavBar
    }

    return <NavigationContext.Provider value={value} >{children}</NavigationContext.Provider>
}