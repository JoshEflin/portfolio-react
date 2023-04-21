import dogCard from '../assets/bone-to-pick.png'
import gitHubIcon from '../assets/github-mark.png'

import booboo from '../assets/hey-boo-boo.png'
import weatherApp from '../assets/desktop-weather-app.png'
import jQueryCal from '../assets/JQuery Calender.png'
import React from 'react';
interface Links {
   github:string;
   deployed:string;
}
interface TechComponentProps {
 img:any
 description:string;
 techs: string[];
 links: Links
}
const data:TechComponentProps = {
    img:dogCard,
    description:"A front-end only dog adoption web-app that turns data from petfinder's API and apiNinja's Dog Breed API into trading cards",
    techs:['JQuery', 'Bulma', 'Adobe Express', 'Petfinder API', 'Dogs API', 'Coolors','Google Fonts', 'Font Awesome'],
    links: {
            github:"https://github.com/JoshEflin/A-Bone-to-Pick",
            deployed:"https://josheflin.github.io/A-Bone-to-Pick/",
        }
}
//  function renderTech(techArr:[string]):React.FC{
//     techArr.forEach((tech)=>{
//         return tech

//     })
//  }

const TechComponent: React.FC<TechComponentProps> = ({ techs }) => {
  return (
    <ul className = 'tech-list'>
      {techs.map((tech, index) => (
        <li className='tech-list-item' key={index}>{tech}</li>
      ))}
    </ul>
  );
};

const LinkComponent:React.FC<Links> =(links)=> {

  return(
    <ul className = 'link-list'>
    <li className= 'link-list-item'>
      <a href={links.github} target= "_blank"> 
        <p>
          Check out the repository
        </p>
        <img className= 'git-hub-icon'src = {gitHubIcon}/>
      </a>
      
    </li>
    <li className='link-list-item'>
      <a href = {links.deployed} target= '_blank'> 
        <p>
          Deployed Application
        </p>
        <i id = 'plane-icon' className="fa-regular fa-paper-plane"></i>
      </a>
    </li>
      </ul>
      )
  }
    


export default function AppCard() {
    
    return(
        <div className='appCard'>
        <img className = 'appCard-img'src ={data.img}/>
        <p className = 'project-description'>{data.description}</p>
        {TechComponent(data)}
        {LinkComponent(data.links)}

        
                
              
        </div>
    )

}