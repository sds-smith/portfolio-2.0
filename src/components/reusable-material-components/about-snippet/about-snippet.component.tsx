import { FC } from 'react'

import { about, skills } from '../../../assets/data/about.data'
import './about-snippet.styles.scss'

type AboutSnippetProps = {
    source: string;
    index?: number;
}

const AboutSnippet: FC<AboutSnippetProps> = ({source, index}) => {
    return (
        <div className='AboutSnippetContainer'>
            {index !== undefined ? (
                <p>{about[index]}</p>
            ) : (
                source === 'skills' ? (
                    <ul>
                        {skills.map((skill) => (
                            <li>{skill}</li>
                        ))}
                    </ul>
                ) : (
                about.map((paragraph) => (
                    <p>{paragraph}</p>
                ))
                )
            )}
        </div>
    )
}

export default AboutSnippet