import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,

  itch_io,
  github,
  uoi,
  q_base,
  ultimate_game_dev_course,
  game_dev_boot_camp_course,

  game_dev,
  mobile_dev,
  programming,

  unity,
  unreal_engine,
  c_sharp,
  c_plus_plus,
  java,
  python,
  flutter,

  duck_u,
  gilbroth,
  chess_club,
  chess,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Developer",
    icon: game_dev,
  },
  {
    title: "Mobile Developer",
    icon: mobile_dev,
  },
  {
    title: "Programmer",
    icon: programming,
  },
];

const technologies = [
  {
    name: "C#",
    icon: c_sharp,
  },
  {
    name: "C++",
    icon: c_plus_plus,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Unreal Engine",
    icon: unreal_engine,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Game Developer - Programmer",
    company_name: "Q BASE R&D",
    icon: q_base,
    iconBg: "#383E56",
    date: "November 2022 - April 2023",
    points: [
      "Designed and developed gameplay mechanics, user interface, and game systems for a VR Game made with Unity called “Escape Space”.",
      "Collaborated with art and sound teams to create immersive and visually stunning gaming experiences.",
      "Worked with project managers and stakeholders to ensure projects were completed on time and within budget.",
    ],
  },
];

const educations = [
  {
    title: "Computer Science",
    company_name: "University Of Ioannina",
    icon: uoi,
    iconBg: "#383E56",
    date: "September 2017 - February 2023",
    points: [],
  },
  {
    title: "Ultimate Game Dev Course",
    company_name: "by Jason Weinmann & Tomas Brush",
    icon: ultimate_game_dev_course,
    iconBg: "#383E56",
    date: "October 2022 - Present",
    points: [],
  },
  {
    title: "Game Developer Boot Camp",
    company_name: "by Jason Weinmann",
    icon: game_dev_boot_camp_course,
    iconBg: "#383E56",
    date: "February 2023 - Present",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Duck U",
    description:
      "You are the last duck! Your purpose is to protect the eggs with your life from the Robot-Ducks, upgrade your Weapons, Abilities and Nest to stay alive, but most important PROTECT THE EGGS!",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "2D",
        color: "green-text-gradient",
      },
      {
        name: "WebGL",
        color: "pink-text-gradient",
      },
    ],
    image: duck_u,
    link_image: itch_io,
    source_code_link: "https://johnrod.itch.io/2d-shooter-unique-bullets",
  },
  {
    name: "Gilbroth's Labyrinth",
    description:
      "",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "3D",
        color: "green-text-gradient",
      },
      {
        name: "PC",
        color: "pink-text-gradient",
      },
    ],
    image: gilbroth,
    link_image: itch_io,
    source_code_link: "https://johnrod.itch.io/gilbroths-labyrinth",
  },
  {
    name: "Chess Club",
    description:
      "",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "3D",
        color: "green-text-gradient",
      },
      {
        name: "PC",
        color: "pink-text-gradient",
      },
    ],
    image: chess,
    link_image: github,
    source_code_link: "https://github.com/johnrodusakis/ChessClub",
  },
];

export { services, technologies, experiences, educations, testimonials, projects };