import J from "./svg"
import { useState } from "react"

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
      <li>
        <span>About Me</span>
        </li>   
        <li>
        <span>Resume</span>
        </li>         
        <li>
        <span>Projects</span>
        </li>         
        <li>
        <span>Contact</span>
        </li>                
      </ul>
    </nav>
    )
}