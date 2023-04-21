

import './App.css'
import Welcome from './components/welcome'
import Nav from './components/nav'
import data from './components/data/appCardData';
import AppCard from './components/appCard'
import AboutMe from './components/aboutme';

export default function App() {
 

  return (
    <div className='wrapper'>
    
      <Nav />
      <Welcome />
      <AboutMe />
      <AppCard data={data}/>
    </div >
  )
}
