

import './App.css'
import Welcome from './components/Welcome'
import Nav from './components/Nav'
import data from './components/data/appCardData';
import AppCard from './components/AppCard'
import AboutMe from './components/Aboutme';
import Footer from './components/Footer';

export default function App() {
 

  return (
    <div className='wrapper'>
    
      <Nav />
      <Welcome />
      <AboutMe />
      <AppCard data={data}/>
      <Footer />
    </div >
  )
}
