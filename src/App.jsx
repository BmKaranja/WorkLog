import { Link, Routes } from 'react-router'
import './App.css'

function App() {
  return (
    <div className='body'>
      <div className='text-6xl text-white banner'>
        <h1>WORK LOG</h1>
      </div>
      <main>
        <section className='dates'>
          <article id='years'>
            <Link to='' className='years'>2025</Link>
            <Link to='' className='years'>2026</Link>
          </article>
          <article className='months'>

          </article>
        </section>
      </main>
    </div>
  )
}

export default App
