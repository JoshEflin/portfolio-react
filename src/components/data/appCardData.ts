import dogCard from '../../assets/bone-to-pick.png'
import booboo from '../../assets/hey-boo-boo.png'
import weatherApp from '../../assets/desktop-weather-app.png'
import jQueryCal from '../../assets/JQuery Calender.png'
import React from 'react'

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
export type {Links, TechComponentProps}
export default data
