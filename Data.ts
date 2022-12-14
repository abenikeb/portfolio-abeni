import { IProject, IAbout, ISkill } from "./interface";
import { FaCaretRight } from "react-icons/fa";

export const AboutData: IAbout = {
  name: "Hi, my name is",
  title1: "Abenezer Kebede.",
  title2: " I build things for the web.",
  description:
    "I’m a FullStack web developer. Focused on building products that will make people's lives better.  I love to learn new things and I am always open to learn new technologies. I'm experienced in developing products for the web, from simple landing pages to full-fledged web apps.",
  buttonText: "check out my projects",
};

// ---------------------------------------------------------------- languages
export const languages: ISkill[] = [
  {
    Icon: FaCaretRight,
    name: "JavaScript (ES6+)",
    level: "45",
  },
  {
    Icon: FaCaretRight,
    name: "TypeScript",
    level: "60",
  },
  {
    Icon: FaCaretRight,
    name: "ReactJS",
    level: "60",
  },
  {
    Icon: FaCaretRight,
    name: "NextJs",
    level: "80",
  },
  {
    Icon: FaCaretRight,
    name: "Tailwind CSS",
    level: "70",
  },
  // {
  //     Icon: FaCaretRight,
  //     name: "Redux tool-kit",
  //     level: "80",
  // },
  // {
  //     Icon: FaCaretRight,
  //     name: "Firebase",
  //     level: "80",
  // },
  // {
  //     Icon: FaCaretRight,
  //     name: "Styled-Components",
  //     level: "45",
  // },
  {
    Icon: FaCaretRight,
    name: "Git + Github",
    level: "45",
  },
  {
    Icon: FaCaretRight,
    name: "SEO",
    level: "45",
  },
];
// ------------------------------------------------------- tools
export const tools: ISkill[] = [
  {
    Icon: FaCaretRight,
    name: "yarn",
    level: "85",
  },
  {
    Icon: FaCaretRight,
    name: "git and github",
    level: "45",
  },
  {
    Icon: FaCaretRight,
    name: "axios",
    level: "60",
  },
  {
    Icon: FaCaretRight,
    name: "SWR",
    level: "45",
  },
];
// ---------------------
export const Learning = [
  {
    Icon: FaCaretRight,
    name: "typeScript",
  },
  {
    Icon: FaCaretRight,
    name: "PWA",
  },
];
// ---------------------------------------------------------------- Project -------------------------------------------------------

export const projects: IProject[] = [
  // sms-client
  {
    name: "SMS-Client",
    description: `This powerful sales management system provides a complete solution for managing your sales enterprise. It includes CRM, order processing, forecasting and much more. (You can log into account with #Password '1uj@21f6fwB' & Tel no '0913228892')`,
    image_path: "/images/SMS-edit.jpg",
    deployed_url: "https://sms-client-mvp.vercel.app/",
    github_url: "https://github.com/abenikeb/sms-client",
    category: ["NextJs"],
    key_techs: ["NextJs", "moralis.io"],
  },

  // greeencheddar
  {
    name: "GreenCheddar",
    description:
      "It is a platform founded in UK, London that calculates an individual's or a household's carbon footprint and rewards users appropriately. Users will be able to sell and/or buy carbon credits on the platform marketplace.",
    image_path: "/images/greencheddar.gif",
    deployed_url: "http://greencheddar.org",
    github_url: "",
    category: ["NextJs"],
    key_techs: ["NextJs", "moralis.io"],
  },

  {
    name: "E-Suke",
    description:
      "This app show products user can add items to the cart and user can remove items from the cart Realtime Reviews Chat auth and you can log in with your Google account(authentication), items detail page, and much more ",
    image_path: "/images/e-suke.png",
    deployed_url: "https://e-suke.netlify.app/",
    github_url: "https://github.com/abenikeb/ecommerce-2.0",
    category: ["react"],
    key_techs: ["React", "reduxjs/toolkit", "Firebase"],
  },

  // Dapp
  {
    name: "Moralis Clone",
    description:
      "A decentralised application is an application that can operate autonomously, typically through the use of smart contracts, that runs on a decentralized computing, blockchain system. ",
    image_path: "/images/dapp.gif",
    deployed_url: "http://metaverse-challenge-gray-one.vercel.app/",
    github_url: "",
    // github_url: "https://github.com/natnael-OQP/metaverse-challenge",
    category: ["ReactJs"],
    key_techs: ["ReactJs", "moralis.io"],
  },

  // {
  //   name: "Dapp",
  //   description:
  //     "A decentralised application is an application that can operate autonomously, typically through the use of smart contracts, that runs on a decentralized computing, blockchain system. ",
  //   image_path: "/images/dapp.gif",
  //   deployed_url: "http://metaverse-challenge-gray-one.vercel.app/",
  //   github_url: "",
  //   // github_url: "https://github.com/natnael-OQP/metaverse-challenge",
  //   category: ["NextJs"],
  //   key_techs: ["NextJs", "moralis.io"],
  // },
  // Eer-Maed

  {
    name: "Erq-Maed",
    description:
      "Medium is a place to write,read and connect It's ease and free to post your thinking on any topic and connect with million of reader ",
    image_path: "/images/erq-maed.gif",
    deployed_url: "https://erqmaed.vercel.app/",
    github_url: "https://github.com/abenikeb/erq-maed",
    category: ["NextJs"],
    key_techs: ["NextJs", "sanity.io"],
  },
  // medium-clone
  {
    name: "medium-clone",
    description:
      "Medium is a place to write,read and connect It's ease and free to post your thinking on any topic and connect with million of reader ",
    image_path: "/images/medium.gif",
    deployed_url: "https://medium-clone-eta.vercel.app/",
    github_url: "https://github.com/abenikeb/medium-clone",
    category: ["NextJs"],
    key_techs: ["NextJs", "sanity.io"],
  },
  // E-commerces -1

  // ኢትዮ-Real-Estate -2
  {
    name: "ኢትዮ-Real-Estate",
    image_path: "/images/real-estate.png",
    deployed_url: "https://ema-real-estate-group.vercel.app/",
    github_url: "https://github.com/abenikeb/real-estate-site",
    category: ["Nextjs", "react"],
    description:
      "ኢትዮ-Real-Estate is an amazing Real Estate Application. With rental homes and for-sale properties, advanced property filtering, property details page , and much more, ",
    key_techs: ["Nextjs", "chakra-ui", "axios"],
  },
  // airbnb clone -3
  // {
  //   name: "Airbnb Clone",
  //   image_path: "/images/aribnb-clone.png",
  //   deployed_url: "https://ema-group-airbnb-clone.vercel.app/",
  //   github_url: "https://github.com/abenikeb/Airbnb-clone",
  //   category: ["Nextjs", "react"],
  //   description:
  //     "a simple airbnb clone build with Nextjs(ssg and ssr), tailwindcss, Mapbox, axios ",
  //   key_techs: ["Nextjs", "tailwindcss", "Mapbox"],
  // },
  // Piper chat -4
  {
    name: "Piper chat",
    image_path: "/images/piper-caht.png",
    deployed_url: "http://piper-chat.vercel.app/",
    github_url: "https://github.com/abenikeb/piper-chat",
    category: ["NextJs", "react"],
    description:
      " Typical Social Media App where one can post,like ,comment,delate your posts, Populated with authentication, etc...",
    key_techs: ["NextJS", "tailwindcss", "Firebase.v9"],
  },
  // Netflix Clone -5
  {
    name: "Netflix Clone",
    image_path: "/images/netflix-clone.png",
    deployed_url: "https://netflix-clone-ajvh.vercel.app/",
    github_url: "https://github.com/abenikeb/NetflixClone",
    category: ["", "react"],
    description:
      "a simple netflix clone ypu can watch trailers  build with reactjs,firebase,redux",
    key_techs: ["ReactJS", "reduxjs/toolkit", "Firebase"],
  },
  // Gmail clone -6
  // {
  //   name: "Gmail Clone",
  //   deployed_url: "https://gmail-clone-with-nathan.netlify.app/",
  //   github_url: "https://github.com/abenikeb/gmail-clone",
  //   category: ["react"],
  //   description:
  //     " Typical Social Media App where one can post,like ,comment etc",
  //   key_techs: ["ReactJS", "firebase", "Redux"],
  // },
  // Ethio chat -7
  {
    name: "Ethio chat",
    deployed_url: "https://etio-chat.netlify.app/",
    github_url: "https://github.com/abenikeb/classroom",
    category: ["react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other ",
    key_techs: ["ReactJS", "Redux", "Firebase"],
  },
  // NGO Site -8
  {
    name: "NGO site",
    deployed_url: "https://etio.netlify.app/",
    github_url: "https://github.com/abenikeb/NGO",
    category: ["react"],
    description: "One of the first projects on ReactJS",
    key_techs: ["ReactJS", "react-router", "react-scroll"],
  },
];
