// import dogCard from '../assets/bone-to-pick.png'
import gitHubIcon from '../assets/github-mark.png'
import data from './data/appCardData';
import { Links, TechComponentProps } from './data/appCardData';
import React from 'react';



const TechComponent: React.FC<TechComponentProps> = ( {techs} ) => {
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
  // this makes one CARD, use state here, when user clicks, state is changes, and props for app card change

export default function AppCard(data:TechComponentProps) {
    
    return(
        <div className='appCard'>
        <img className = 'appCard-img'src ={data.img}/>
        <p className = 'project-description'>{data.description}</p>
        {TechComponent(data)}
        
        {LinkComponent(data.links)}
     
        </div>
    )

}