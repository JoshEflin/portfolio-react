import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactTyped from 'react-typed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">

      <h1>Josh Eflin: Web Development</h1>
      <div className="text">
      <ReactTyped
        strings={[
            'Opera Singer turned Web Developer',
            'Welcome',
            'Built with React and Typescript'
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
      />
    </div>
    <button>Enter</button>
    {/* <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
    </div>
  )
}

export default App
