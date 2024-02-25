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
  deloitte,
  kumagema,
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
    iconBg: "#1C1C1C",
    date: "Nov 2022 - Apr 2023",
    points: [
      "Designed and developed gameplay mechanics, user interface, and game systems for a VR Game made with Unity called “Escape Space”.",
      "Collaborated with art and sound teams to create immersive and visually stunning gaming experiences.",
      "Worked with project managers and stakeholders to ensure projects were completed on time and within budget.",
    ],
  },
  {
    title: "Full Stack Developer - Salesforce",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#1C1C1C",
    date: "Jul 2023 - Present",
    points: [
      "Crafted user-focused Salesforce experiences. Emphasized intuitive design with technologies like Lightning Web Components; integrated external systems for enhanced functionality.",
      "Developed robust backend Salesforce logic. Implemented process automation, custom business rules, and data manipulation using Apex, SOQL, and SOSL.",
      "Championed code quality and collaboration. Prioritized thorough testing, utilized version control (Git), and actively participated in Agile development methodologies.",
    ],
  },
  {
    title: "Game Developer - Programmer",
    company_name: "KUMAGEMA",
    icon: kumagema,
    iconBg: "#1C1C1C",
    date: "Dec 2023 - Present",
    points: [
      "Implemented core gameplay mechanics using C# scripting. Demonstrated proficiency in object-oriented design, physics systems, and Unity's component-based architecture to bring game concepts to life.",
      "Optimized game performance for smooth player experiences. Profiled code, identified bottlenecks, and employed techniques such as object pooling and efficient algorithms to ensure consistent framerates.",
      "Collaborated effectively within an iterative development environment. Utilized version control (Git), participated in code reviews, and adapted to evolving project requirements with flexibility.",
    ],
  },
];

const educations = [
  {
    title: "Computer Science",
    company_name: "University Of Ioannina",
    icon: uoi,
    iconBg: "#1C1C1C",
    date: "September 2017 - February 2023",
    points: [],
  },
  {
    title: "Ultimate Game Dev Course",
    company_name: "by Jason Weinmann & Tomas Brush",
    icon: ultimate_game_dev_course,
    iconBg: "#1C1C1C",
    date: "October 2022 - Present",
    points: [],
  },
  {
    title: "Game Developer Boot Camp",
    company_name: "by Jason Weinmann",
    icon: game_dev_boot_camp_course,
    iconBg: "#1C1C1C",
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
      "Arm your wings and protect the nest! Upgrade your arsenal and outsmart enemy robot ducks in this action-packed 2D game.",
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
    link_images: [
      itch_io,
    ],
    source_code_links: [
      "https://johnrod.itch.io/2d-shooter-unique-bullets",
    ]
  },
  {
    name: "Gilbroth's Labyrinth",
    description:
      "Conquer the maze, claim the treasure, and earn the King's favor in this perilous 3D adventure game.",
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
    link_images: [
      itch_io,
    ],
    source_code_links: [
      "https://johnrod.itch.io/gilbroths-labyrinth",
    ]
  },
  {
    name: "Chess Club",
    description:
      "Step into a whole new dimension of chess with our 3D multiplayer game. Challenge your friends and dominate the board!",
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
    link_images: [
      itch_io,
      github,
    ],
    source_code_links: [
      "https://johnrod.itch.io/chess-club",
      "https://github.com/johnrodusakis/ChessClub",
    ]
  },
];

export { services, technologies, experiences, educations, testimonials, projects };