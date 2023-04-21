// import dogCard from '../assets/bone-to-pick.png'
import gitHubIcon from '../assets/github-mark.png'
import data from './data/appCardData';
import { Links, TechComponentProps } from './data/appCardData';
import React from 'react';



const TechComponent: React.FC<TechComponentProps> = ( props ) => {
  return (
    <ul className = 'tech-list'>
      {props.techs.map((tech, index) => (
        <li className='tech-list-item' key={index}>{tech}</li>
      ))}
    </ul>
  );
};

const LinkComponent:React.FC<Links> =({github, deployed})=> {

  return(
    <ul className = 'link-list'>
    <li className= 'link-list-item'>
      <a href={github} target= "_blank"> 
        <p>
          Check out the repository
        </p>
        <img className= 'git-hub-icon'src = {gitHubIcon}/>
      </a>
      
    </li>
    <li className='link-list-item'>
      <a href = {deployed} target= '_blank'> 
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

export default function AppCard({ img, description, techs, links}:TechComponentProps) {
    
    return(
        <div className='appCard'>
        <img className = 'appCard-img'src ={img}/>
        <p className = 'project-description'>{description}</p>
        {/* {TechComponent(data)}
        {LinkComponent(data.links)} */}
        <TechComponent techs = {techs} img = '' description='' links= {{deployed:'', github:''}} />
        <LinkComponent github ={links.github} deployed = {links.deployed} />
     
        </div>
    )

}