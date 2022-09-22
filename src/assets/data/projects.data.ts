
import CrownClothing from '../media/crwn-clothing.png'
import AssembleTheJams from '../media/atj.png'
import RandomPasswordGenerator from '../media/rpg.png'
import Weather from '../media/weather.png'
import WHRDL from '../media/WHRDL_card.png'
import EDD from '../media/edd.png'

export type ProjectType = {
    id: string;
    heading_title: string;
    heading_subtitle: string;
    background_image: any;
    video_link: string;
    live_link: string;
    readme_link: string;
    description: string;
}

export type Projects = ProjectType[]

export const projects: Projects = [

    {   
        id: 'atj-card',
        heading_title : 'Assemble the Jams',
        heading_subtitle : 'React Progressive Web App',
        background_image : AssembleTheJams,
        video_link : 'https://youtu.be/MWqiaZKtZzg',
        live_link : 'https://assemblethejams.netlify.app',
        readme_link : 'https://github.com/sds-smith/assemble_the_jams_3/blob/master/README.md',
        description : 'Connect to your Spotify Premium account, execute searches and receive search term matches and recommendations, play/pause a song, like/ unlike songs, create custom playlist, and save playlist to your Spotify profile.'
    },
    {   
        id: 'crwn-card',
        heading_title : 'Crown Clothing',
        heading_subtitle : 'Fully scalable React eCommerce single-page web app',
        background_image : CrownClothing,
        video_link : 'https://youtu.be/hQIzd601eyA',
        live_link : 'https://sds-crown-clothing.netlify.app',
        readme_link : 'https://github.com/sds-smith/crwn-clothing/blob/master/README.md',
        description : 'React 18 | React Router 6 | Redux, Redux sagas | css-in-js | Firebase | Stripe | TypeScript. Securely sign-in with Google, or create and account to sign in with username/password. Add items to cart, delete items, securely checkout with Stripe.'
    },
    {   
        id: 'WHRDL-card',
        heading_title : 'WHRDL',
        heading_subtitle : 'React Native mobile app',
        background_image : WHRDL,
        video_link : '',
        live_link : '/WHRDL',
        readme_link : 'https://github.com/sds-smith/whrdl/blob/master/README.md',
        description : 'Clone of a popular word game built with React Native and Expo. Guess the secret word in six tries. Reset game, get hints'
    },
    {   
        id: 'weather-card',
        heading_title : 'Weather App',
        heading_subtitle : 'Vue single-page web app',
        background_image : Weather,
        video_link : '',
        live_link : 'https://sds-smith.github.io/weather/',
        readme_link : 'https://github.com/sds-smith/weather/blob/master/README.md',
        description : 'Search by City/ State/ Country, or by longitudinal coordinates, and receive up-to-the-minute weather data'
    },
    {   
        id: 'rpg-card',
        heading_title : 'Password Generator',
        heading_subtitle : 'HTML/JS web app',
        background_image : RandomPasswordGenerator,
        video_link : '',
        live_link : 'https://sds-smith.github.io/password_generator/',
        readme_link : 'https://github.com/sds-smith/password_generator/blob/master/README.md',
        description : 'Generate random unique password and copy to clipboard'
    },
    {   
        id: 'edd-card',
        heading_title : 'Real Estate Website',
        heading_subtitle : 'React Web App',
        background_image : EDD,
        video_link : '',
        live_link : 'https://dannettel-realtor.netlify.app/',
        readme_link : 'https://github.com/sds-smith/dannettel-react/blob/master/README.md',
        description : 'Realtor Website.'
    }
]