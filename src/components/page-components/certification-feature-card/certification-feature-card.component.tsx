import { FC } from 'react';
import { CertificationType } from '../../../assets/data/certifications.data'
import './certification-feature-card.styles.scss'

type CertificationFeatureCardProps = {
    certification: CertificationType;
}

const CertificationFeatureCard: FC<CertificationFeatureCardProps> = ({certification}) => {
    return (
        <div className='CertificationFeatireCardContainer'>
            <div>{certification.title}</div>
            <img src={certification.src} alt={certification.alt} />
        </div>
    )
}

export default CertificationFeatureCard