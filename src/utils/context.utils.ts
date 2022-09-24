import { ReactNode } from "react";

export type PortfolioContextProps = {
    featuredProjectIndex: number;
    setFeaturedProjectIndex(featuredProjectIndex: number): void;
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