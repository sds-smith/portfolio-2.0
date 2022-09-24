import { FC, useState, useEffect } from 'react';
import { CertificationType } from '../../../assets/data/certifications.data'
import './certification-feature-card.styles.scss'

type CertificationFeatureCardProps = {
    certification: CertificationType;
}

const CertificationFeatureCard: FC<CertificationFeatureCardProps> = ({certification}) => {
    const [timer, setTimer] = useState(false)

    useEffect (() => {
        setTimer(true)
    },[])

    return (
        <div className='CertificationFeatireCardContainer'>
            <div>{certification.title}</div>
            <img src={certification.src} alt={certification.alt} />
            <div className='TimeoutCounter' style={timer ? {transform : 'scaleX(0)'} : {transform : 'scaleX(1)'}}></div>
        </div>
    )
}

export default CertificationFeatureCard