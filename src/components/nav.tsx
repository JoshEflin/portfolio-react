import J from "./svg"
import { useState } from "react"

const navItemsArr ={data:['About Me', 'Resume', 'Projects', 'Contact'] }
const NavItem: React.FC<{navLink:string[]}> = ( {navLink} )=>{
  return(
    <>
    {navLink.map((item,index)=>(
      <li className="nav-list-item" >
        <span key={index}>
          {item}
        </span>
      </li>
  ))}
</>
  )
}
export default function Nav () {

 const [clicked, setClicked] =useState(false)
 
 function handleClick(){
  if(clicked){
    // change color of text or do something else neat
  }else {
    // do nothing
  }
  setClicked(!clicked)
 }

    return (
        <nav>
      <ul className='navbar'>
        <J />
      <NavItem navLink={navItemsArr.data} />
      </ul>
    </nav>
    )
}