

import './App.css'
import Welcome from './components/welcome'
import Nav from './components/nav'
import J from './components/svg'
import data from './components/data/appCardData';
import AppCard from './components/appCard'

export default function App() {
 

  return (
    <div className='wrapper'>
    
      <Nav />
      <Welcome />
      
      <AppCard img= {data.img} description= {data.description}  techs = {data.techs}links = {data.links}/>
    </div >
  )
}
