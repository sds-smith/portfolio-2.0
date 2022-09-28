import { ReactNode } from "react";
import { CertificationType } from "../assets/data/certifications.data";

export type PortfolioContextProps = {
    featuredProjectIndex: number;
    setFeaturedProjectIndex(featuredProjectIndex: number): void;
    clickedCert: CertificationType;
    setClickedCert(clickedCert: CertificationType): void;
}

export type NavigationContextProps = {
    isMenuOpen: boolean;
    setIsMenuOpen(isMenuOpen: boolean): void;
    toggleNavBar(): void;
}

export type ActiveTabType = {
    'featured' : boolean;
    'all' : boolean;
    'about' : boolean;
    'certifications' : boolean;
}

export type ActiveViewType = {
    'signature_card' : boolean;
    'outlet' : boolean;
}

export type ResponsiveContextProps = {
    isMobile: boolean;
    activeTab: ActiveTabType;
    activeView: ActiveViewType;
    setDesktop(): void;
    setMobileHome(): void;
    setMobileFeatured(): void;
    setMobileAll(): void;
    setMobileAbout(): void;
    setMobileCertifications(): void;
}

export type ProviderProps = {
    children?: ReactNode
}