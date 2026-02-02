import { Link, Routes } from 'react-router'
import './App.css'
import Footer from './Footer'
import Me from './Me'

function App() {
  return (
    <div className='body'>
      <div className='text-6xl text-white banner'>
        <h1>BRIAN K. MAINA</h1>
      </div>
      <main>
        <nav id="years" >

        </nav>
        <Me/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
