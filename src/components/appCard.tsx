import gitHubIcon from '../assets/github-mark.png'
import { Links, AppCardProps } from './data/appCardData';
import React from 'react';


const TechComponent: React.FC<{techs:string[]}> = ( {techs} ) => {
  return (
    <ul className = 'tech-list'>
      {techs.map((tech, index) => (
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
  // Below function is to split up large text descriptions into smaller p tags to append. need to split strings on whitespace though
  const DescriptionComponent:React.FC<{description:string}> = ({description}) =>{
    if (description.length > 100){
      const halfway= Math.floor(description.length/2)
      const whitespace= description.indexOf(' ', halfway)
      console.log(whitespace)
      return(
        <>
        <p>{description.substring( 0,whitespace)}</p>
        <p>{description.substring( whitespace, description.length)}</p>
      
        </>
      )
    } else{
      return <p>{description}</p>
    }
  }
  // this makes one CARD, use state here, when user clicks, state is changes, and props for app card change

export default function AppCard({data}:{data:AppCardProps[]}) {
    
    return(
    <>
    {console.log (data)}
      {data.map(({img, description, techs, links:{deployed, github}}: AppCardProps, index)=>(
        <div key ={index} className='appCard'>
        <img className = 'appCard-img'src ={img} />
        <DescriptionComponent description= {description} />
        <TechComponent techs = {techs} />
        <LinkComponent github ={github} deployed = {deployed} />
     
        </div>
        ))}
    </>
    )

}