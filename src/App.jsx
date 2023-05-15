import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';

const config = {
  github: {
    username: 'theydvgaurav', 
    sortBy: 'updated',
    limit: 10, 
    exclude: {
      forks: false,
      projects: ['dsa-cpp','theydvgaurav','YC-Frontend', 'BS-Assignment', 'theydvgaurav.github.io'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'theydvgaurav',
  },
  skills: [
    'Python',
    'Django',
    'JavaScript',
    'Node.js',
    'React.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Linux',
    'MongoDB'
  ],
  experiences: [
    {
      company: 'Betterhalf.ai',
      position: 'Backend Developer Intern',
      from: 'January 2023',
      to: 'Present',
      companyLink: 'https://www.betterhalf.ai/',
    },
    {
      company: 'Siemens Energy',
      position: 'Software Engineer Intern',
      from: 'January 2022',
      to: 'July 2022',
      companyLink: 'https://www.siemens-energy.com/global/en.html',
    },
  ],
  education: [
    {
      institution: 'Indian Institute of Information Technology, Sonepat',
      degree: 'Bachelors in Technology',
      from: '2019',
      to: '2023',
    },
  ],

  themeConfig: {
    defaultTheme: 'lemonade',

    disableSwitch: false,
    respectPrefersColorScheme: false,

    hideAvatarRing: false,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],
  },
}


function App() {

  return (
      <GitProfile
      config={config}
    />
  )
}

export default App
