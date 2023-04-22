import J from "./Svg"
import { useState } from "react"
// use state to change the colors of the nav links
// dynamically add href values

const navItemsArr =['About Me', 'Resume', 'Projects', 'Contact']
const NavItem: React.FC<{currentView:string ,navLink:string[]}> = ( {currentView, handleView, navLink} )=>{
  return(
    <>
    {navLink.map((item,index)=>(
      <li className="nav-list-item" key={`nav-item-${index}`}>
        <a href= {`#${item}`} 
        onClick= {()=>handleView(`${item}`)}
        className={currentView ===`${item}` ? 'nav-item active': 'nav-item'} >
          {item}
        </a>
      </li>
  ))}
</>
  )
}
export default function Nav ({currentView, handleView}) {

//  const [clicked, setClicked] =useState(false)
 
//  function handleClick(){
//   if(clicked){
//     // change color of text or do something else neat
//   }else {
//     // do nothing
//   }
//   setClicked(!clicked)
//  }

    return (
        <nav>
      <ul className='navbar'>
        
        <J />
        
      <NavItem  currentView = {currentView} 
      handleView = {handleView}
      navLink={navItemsArr} />
      </ul>
    </nav>
    )
}