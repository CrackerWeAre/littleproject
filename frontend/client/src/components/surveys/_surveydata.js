
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import afreecatv from "../../style/img/platform/afreeca.png";
import twitch from "../../style/img/platform/twitch.png";
import youtube from "../../style/img/platform/youtube.png";
import vlive from "../../style/img/platform/vlive.png";

// Temporary Images
export const images = [
    'https://images.unsplash.com/photo-1503707663-64584849606b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1550236520-7050f3582da0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
];

export const PLATFORMS = [
    {
        id: "youtube",
        text: "Youtube",
        checked: false,
        src: youtube
    },
    {
        id: "twitch",
        text: "Twitch",
        checked: false,
        src: twitch
    },
    {
        id: "afreeca",
        text: "Afreeca TV",
        checked: false,
        src: afreecatv
    },
    {
        id: "vlive",
        text: "Vlive",
        checked: false,
        src: vlive
    },
    {
        id: "naver selective",
        text: "Naver Selective",
        checked: false,
    },
    {
        id: "naver now",
        text: "Naver Now",
        checked: false,
    },
    {
        id: "kakao tv",
        text: "Kakao TV",
        checked: false,
    }
];

export const CATEGORIES = [
    {
        id: 'game',
        text: '게임',
        checked: false,
        icon: faGamepad
    },
    {
        id: 'music',
        text: '음악',
        checked: false,
        icon: faHeadphones
    },
    {
        id: 'communication',
        text: '소통',
        checked: false,
        icon: faComments
    },
    {
        id: 'news',
        text: '뉴스',
        checked: false,
        icon: faNewspaper
    },
    {
        id: 'shopping',
        text: '쇼핑',
        checked: false,
        icon: faShoppingCart
    },
    {
        id: 'airwave',
        text: '공중파',
        checked: false,
        icon: faTv
    },
    {
        id: 'sports',
        text: '스포츠/운동',
        checked: false,
        icon: faRunning
    },
    {
        id: 'cooking',
        text: '요리',
        checked: false,
        icon: faUtensils
    }
];