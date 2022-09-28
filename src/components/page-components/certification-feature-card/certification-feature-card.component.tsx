import { FC, useState, useEffect, useContext } from 'react';
import CertificationCard from '../../reusable-material-components/certification-card/certification-card.component';
import { ResponsiveContext } from '../../../contexts/responsive-context';
import { CertificationType } from '../../../assets/data/certifications.data'
import './certification-feature-card.styles.scss'

type CertificationFeatureCardProps = {
    certification: CertificationType;
    expires?: boolean;
}

const CertificationFeatureCard: FC<CertificationFeatureCardProps> = ({certification, expires=false}) => {
    const {isMobile} = useContext(ResponsiveContext)

    const [timer, setTimer] = useState(false)

    useEffect (() => {
        expires && setTimer(true)
    },[expires])

    return (
        <div className={isMobile ? 'CertificationFeatureCardContainer CertificationFeatureCardMobile' : 'CertificationFeatureCardContainer'}>
            <CertificationCard certification={certification} />
            {expires && 
                <div 
                    className='TimeoutCounter' 
                    style={timer ? 
                        {transform : 'scaleX(0)'} : 
                        {transform : 'scaleX(1)'}}>
                </div>}
        </div>
    )
}

export default CertificationFeatureCard