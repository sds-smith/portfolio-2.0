import { FC } from "react";
import { CertificationType } from "../../../assets/data/certifications.data"

type CertificationCardProps = {
    certification: CertificationType;
}

const CertificationCard: FC<CertificationCardProps> = ({certification}) => {
    return (
        <div>
            <div>{certification.title}</div>
            <img src={certification.src} alt={certification.alt} />
        </div>
    )
}

export default CertificationCard