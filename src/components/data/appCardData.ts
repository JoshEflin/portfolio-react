import dogCard from "../../assets/bone-to-pick.png";
import booboo from "../../assets/hey-boo-boo.png";
import weatherApp from "../../assets/desktop-weather-app.png";
import jQueryCal from "../../assets/JQuery Calender.png";
import blog from "../../assets/Tech-nollege-E.png";
import noteTaker from "../../assets/note-taker.png";
import JAD from "../../assets/JAD.png";
import Bone2 from "../../assets/bone2.png";

interface Links {
  github: string;
  deployed: string;
}
interface AppCardProps {
  title: string;
  img: any;
  description: string;
  techs: string[];
  links: Links;
}
const data: AppCardProps[] = [
  {
    title: "A Bone to Pick 2.0",
    img: Bone2,
    description:
      "A Refactor of the Original Bone-To Pick Application using the MERN stack",
    techs: [
      "React",
      "Ant Design",
      "MongoDB",
      "Express",
      "Node",
      "Petfinder API",
    ],
    links: {
      github: "https://github.com/JoshEflin/A-Bone-To-Pick-V.2",
      deployed: "https://a-bone-to-pick.herokuapp.com/",
    },
  },
  {
    title: "JAD Grocery",
    img: JAD,
    description:
      "An online grocery store for people who don't want the hassle of waiting in a line or interacting with other humans!",
    techs: ["React", "TailwindCSS", "MongoDB", "Express", "Node", "Edamam API"],
    links: {
      github: "https://github.com/JoshEflin/JAD",
      deployed: "https://groceryjad.herokuapp.com/",
    },
  },
  {
    title: "A Bone to Pick 1.0",
    img: dogCard,
    description:
      "A front-end only dog adoption web-app that turns data from petfinder's API and apiNinja's Dog Breed API into trading cards",
    techs: ["JQuery", "Bulma", "Adobe Express", "Petfinder API", "Dogs API"],
    links: {
      github: "https://github.com/JoshEflin/A-Bone-to-Pick",
      deployed: "https://josheflin.github.io/A-Bone-to-Pick/",
    },
  },
  {
    title: "Hey Boo Boo",
    img: booboo,
    description:
      "A potlucking- or party-planning app for creating picnics (events), inviting your friends, and organizing which foods get put on the table!",
    techs: [
      "Handlebars",
      "Node.js",
      "Express.js",
      "sequelize",
      "express-session",
      "Google Calendar API",
    ],
    links: {
      github: "https://github.com/JoshEflin/Hey-boo-boo",
      deployed: "https://lit-river-34902.herokuapp.com/",
    },
  },
  {
    title: "TechNollegE",
    img: blog,
    description:
      "A CMS style blog site for publishing articles and  leaving comments. User's must log in in order to make posts or leave comments. This full stack Application uses the Handlebars view engine.",
    techs: [
      "Handlebars",
      "Node.js",
      "Express.js",
      "sequelize",
      "express-session",
    ],
    links: {
      github: "https://github.com/JoshEflin/Tech-Blog-MVC",
      deployed: "https://smufduffwuffluff.herokuapp.com/",
    },
  },
  {
    title: "What is the Weather?",
    img: weatherApp,
    description:
      "Five day outlook is a weather application that uses the fetch API, local storage and vanilla JS to get the forecast",
    techs: ["javascript", "HTML", "CSS", "Open Weather API"],
    links: {
      github: "https://github.com/JoshEflin/five-day-outlook",
      deployed: "https://josheflin.github.io/five-day-outlook/",
    },
  },
  {
    title: "JQuery Calendar",
    img: jQueryCal,
    description:
      "A simple calendar app made using JQuery and Bootstrap. The user can add items to their daily to-do list. The user can rest the Calendar daily, as time passes the fields change color depending on the hour.",
    techs: ["Bootstrap", "JQuery"],
    links: {
      github: "https://github.com/JoshEflin/JQuery-Calendar",
      deployed: "https://josheflin.github.io/JQuery-Calendar/",
    },
  },

  //  {
  //     img:noteTaker,
  //      description:"This project is an excersize in reverse engineering a back end for a prebuilt front end web app that is designed to store notes for easy access at a later date. It utilzies express.js as well as uuid packages.",
  //      techs:['Node.js','Express.js','UUID'],
  //      links: {
  //              github:"https://github.com/JoshEflin/Real-Good-Notes",
  //              deployed:"https://note-taker934823.herokuapp.com/",
  //         }
  //  }
];
export type { Links, AppCardProps };
export default data;
