import Command_Line from '../media/certifications/Command_Line_Codecademy.png'
import Front_End from '../media/certifications/Front_End_Codecademy.png'
import HTML from '../media/certifications/HTML_Codecademy.png'
import Intermediate_Javascript from '../media/certifications/Intermediate_Javascript_Codecademy.png'
import Javascript from '../media/certifications/Javascript_Codecademy.png'
import React from '../media/certifications/React_Codecademy.png'
import React_Native from '../media/certifications/React_Native_Codecademy.png'
import Vue from '../media/certifications/Vue_Codecademy.png'
import NodeJS from '../media/certifications/NodeJS_Codecademy.png'
import Responsive_Design from '../media/certifications/Responsive_Web_FCC.png'
import JavascriptFCC from '../media/certifications/Javascript_Algorithms_Data_Structures_FCC.png'
import oAuth_2 from '../media/certifications/oAuth_2.0_Udemy.jpeg'
import Express from '../media/certifications/Express_Codecademy.png'
import Agile from '../media/certifications/Agile_Foundations_LinkedinLearning.png'
import Triplebyte_React from '../media/certifications/React_Triplebyte.png'
import TypeScript from '../media/certifications/TypeScript_Codecademy.png'
import CompleteReactDeveloper from '../media/certifications/Complete_React_Developer_ztm_Udemy.jpeg'
import JavaScriptAdvancedConcepts from '../media/certifications/JavaScript_Advanced_Concepts_ztm_Udemy.jpeg'
import CodingInterview from '../media/certifications/Master_Coding_Interview_ztm_Udemy.jpeg'

export type CertificationType = {
    title: string;
    src: any;
    alt: string;
    feature : boolean;
    rank : number;
}

export const defaultCertification = {
    title: '',
    src: '',
    alt: '',
    feature: false,
    rank : 0
}

export const codecademyCertifications = [
    {
        title : 'Front End Engineer',
        src : Front_End,
        alt : 'front end certificate from Codecademy',
        feature : true,
        rank : 4
    },
    {
        title : 'React',
        src : React,
        alt : 'react certificate from Codecademy',
        feature : false,
        rank : 0
    },
    {
        title : 'React Native',
        src : React_Native,
        alt : 'react native certificate from Codecademy',
        feature : false,
        rank : 0
    },
    {
        title: 'TypeScript',
        src : TypeScript,
        alt : 'typescript certificate from Codecademy',
        feature : false,
        rank : 0
    },
    {
        title : 'Intermediate Javascript',
        src : Intermediate_Javascript,
        alt : 'Intermediate Javascript certificate from Codecademy',
        feature : false,
        rank : 0
    },
    {
        title : 'Javascript',
        src : Javascript,
        alt : 'Javascript certificate from Codecademy',
        feature : false,
        rank : 0
    },
    {
        title : 'Vue',
        src : Vue,
        alt : 'Vue certificate from Codecademy',
        feature : false,
        rank : 0
    },
    {
        title : 'HTML',
        src : HTML,
        alt : 'HTML certificate from Codecademy',
        feature : false,
        rank : 0
    },
    {
        title : 'Command Line',
        src : Command_Line,
        alt : 'Command Line certificate from Codecademy',
        feature : true,
        rank : 8
    },
    {
        title : 'NodeJS',
        src : NodeJS,
        alt : 'NodeJS certificate from Codecademy',
        feature : true,
        rank : 6
    },
    {
        title : 'Express',
        src : Express,
        alt : 'Express certificate from Codecademy',
        feature : false,
        rank : 0
    },    
]

export const freeCodeCampCertifications = [
    {
        title : 'Responsive Design',
        src : Responsive_Design,
        alt : 'Responsive Design certificate from Free Code Camp',
    },
    {
        title : 'Javascript Algorithms and Data Structures',
        src : JavascriptFCC,
        alt : 'Javascript Algorithms and Data Structures certificate from Free Code Camp',
    },    
]

export const udemyCertifications = [
    {
        title : 'The Complete React Developer in 2022',
        src : CompleteReactDeveloper,
        alt : 'The Complete React Developer certificate from Zero to Mastery on Udemy',
        feature : true,
        rank : 1
    },
    {
        title : 'oAuth 2.0',
        src : oAuth_2,
        alt : 'oAuth 2.0 certificate from Udemy',
        feature : true,
        rank : 9
    },
    {
        title : 'JavaScript - the Advanced Concepts (2022)',
        src : JavaScriptAdvancedConcepts,
        alt : 'JavaScript the advanced concepts certificate from Zero to Mastery on Udemy',
        feature : true,
        rank : 5
    },    
    {
        title : 'Data Structures and Algorithms',
        src : CodingInterview,
        alt : 'Master the Coding Interview: Data Structures and Algorithms certificate from Zero to Mastery on Udemy',
        feature : true,
        rank : 7
    },
]

export const miscCertifications = [
    {
        title : 'Agile Foundations',
        src : Agile,
        alt : 'Agile Foundations certificate from Linkedin Learning',
        feature : true,
        rank : 3
    },
    {
        title : 'Triplebyte React Level 4',
        src : Triplebyte_React,
        alt : 'React certificate from Triplebyte',
        feature : true,
        rank : 2
    }
]

export const featuredCertifications = 
    udemyCertifications.filter(cert => cert.feature === true)
    .concat(codecademyCertifications.filter(cert => cert.feature === true))
    .concat(miscCertifications.filter(cert => cert.feature === true))
    .sort((a,b) => a.rank - b.rank)

// const certificationsData = [
//     {
//         class_name : 'codecademy cert-container',
//         title : 'Codecademy Certifications',
//         array : codecademyCertifications
//     },
//     {
//         class_name : 'freecodecamp cert-container',
//         title : 'FreeCodeCamp Certifications',
//         array : freeCodeCampCertifications
//     },
//     {
//         class_name : 'udemy cert-container',
//         title : 'Udemy Certifications',
//         array : udemyCertifications
//     },
//     {
//         class_name : 'linkedinLearning cert-container',
//         title : 'Miscellaneous Certifications',
//         array : miscCertifications
//     }, 
// ]