

import './App.css'
import Welcome from './components/welcome'
import Nav from './components/nav'
import J from './components/svg'
import AppCard from './components/appCard'

export default function App() {
 

  return (
    <div className='wrapper'>
      {/* <J /> */}
      <Nav />
      <Welcome />
      <AppCard />
    </div >
  )
}
