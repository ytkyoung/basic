//Import Images
// import athlete from './img/athlete-small.png';
// import goodtimes from './img/goodtimes-small.png';
// import theracer from './img/theracer-small.png';
// import athlete2 from './img/athlete2.png';
// import goodtimes2 from './img/good-times2.jpg';
// import theracer2 from './img/the-racer2.jpg';
import Fender from './img/Fender.jpg';

export const MovieState = () => {
  return [
    {
      id: 0,
      title: 'BRANDED ECOMMERCE',
      date: '02/04',
      text:
        'We go beyond best practices and build best-in-class D2C channels that drive commerce, shape culture, and define categories.',
      url: '/work/test2',
      projects: [
        {
          title: 'Google Store',
          description:
            'AN ECOMMERCE EXPERIENCE HELPING GOOGLE BRING ITS HARDWARE TO PEOPLE ACROSS THE GLOBE',
          video: true,
          mainVideo: 'images/Google-Store.mp4',
          mainImg: 'images/Beats.jpg',
        },
        {
          title: 'Beats By Dre',
          description:
            'ENGINEERING A DIGITAL DESTINATION THAT MOVES AT THE SPEED OF CULTURE',
          mainImg: 'images/Beats.jpg',
        },
      ],
    },
    {
      id: 1,
      title: 'DIGITAL PRODUCTS+ SERVICES',
      date: '02/04',
      text:
        'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.',
      url: '/work/test3',
      projects: [
        {
          title: 'Fender Academy',
          description:
            'A WEB SERVICE TO MAKE SALES TRAINING FEEL LESS LIKE WORK AND MORE LIKE PLAY',
          video: false,
          mainImg: Fender,
        },
        {
          title: 'American Express',
          description:
            'LAYING A DESIGN FOUNDATION FOR FUTURE PRODUCTS AND SERVICES WITH THE OPEN APP',
          video: false,
          mainImg: Fender,
        },
      ],
    },
    {
      id: 2,
      title: 'WEBSITES + PLATFORMS',
      date: '03/04',
      text:
        'We conceive and create experiences that immerse consumers in the brand through a combination of utility and creativity.',
      url: '/work/test4',
      projects: [
        {
          title: 'Riot Games',
          description:
            'REVITALIZING THE RIOT GAMES BRAND WITH AN UPGRADED DIGITAL EXPERIENCE',
          video: false,
          mainImg: 'images/Riot.jpg',
        },
        {
          title: 'SoftBank Vision Fund',
          description:
            'BUILDING A DIGITAL DESTINATION FOR THE LEADING TECH INVESTMENT FUND',
          video: false,
          mainImg: 'images/Softbank.jpg',
        },
      ],
    },
    {
      id: 3,
      title: 'BRANDING + ADVERTISING',
      date: '04/04',
      text:
        'We create identities, platforms, and activations that differentiate brands and position them to matter in culture.',
      url: '/work/test5',
      projects: [
        {
          title: 'NERD Skincare',
          description:
            'DEVELOPING A BRAND THAT BROUGHT SCIENCE TO BEAUTY IN BOLD, UNEXPECTED WAYS',
          video: false,
          mainImg: 'images/Nerd.jpg',
        },
        {
          title: 'Brixton',
          description:
            'HONORING THE PAST TO BUILD THE FUTURE OF THE BRIXTON BRAND',
          video: false,
          mainImg: 'images/Brixton.jpg',
        },
      ],
    },
  ];
};
