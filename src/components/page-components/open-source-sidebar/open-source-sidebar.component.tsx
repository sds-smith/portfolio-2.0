import { FC, useContext } from "react"
import { ResponsiveContext } from "../../../contexts/responsive-context"
import './open-source-sidebar.styles.scss'

const OpenSourceSidebar: FC = () => {
    const {isMobile} = useContext(ResponsiveContext)

    return (
        <div className={isMobile ? 'OpenSourceSidebarContainer OpenSourceSidebarMobile' : 'OpenSourceSidebarContainer'}>
            <h3>Open-source Contributions</h3>
            <a className='ProjectButton' href='https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/spotify-api/index.d.ts' target='_blank' rel="noreferrer">
                    <h4>DefinitelyTyped - Spotify API TypeScript Definitions</h4>
                    <p>contributed two new type definitions: RecommendationTrackObject & RecommendationAlbumObject</p>
            </a>
        </div>
    )
}

export default OpenSourceSidebar