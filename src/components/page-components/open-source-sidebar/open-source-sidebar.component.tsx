import { FC, useContext } from "react"
import { ResponsiveContext } from "../../../contexts/responsive-context"
import './open-source-sidebar.styles.scss'

const OpenSourceSidebar: FC = () => {
    const {isMobile} = useContext(ResponsiveContext)

    return (
        <div className={isMobile ? 'OpenSourceSidebarContainer OpenSourceSidebarMobile' : 'OpenSourceSidebarContainer'}>
            <h2>Open-source Contributions</h2>
            <div className='ProjectButton'>
                <a href='https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/spotify-api/index.d.ts' target='_blank' rel="noreferrer">
                    <h3>DefinitelyTyped - Spotify API TypeScript Definitions</h3>
                    <p>contributed two new type definitions: RecommendationTrackObject & RecommendationAlbumObject</p>
                </a>
            </div>

        </div>
    )
}

export default OpenSourceSidebar