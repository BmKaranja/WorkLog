import { Link } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <div className='text-6xl text-white banner'>
        <h1>WORK LOG</h1>
      </div>
      <main>
        <section className='dates'>
          <article className='years'>
            <Link to=''>2025</Link>
            <Link to=''>2026</Link>
          </article>
          <article className='months'>

          </article>
        </section>
      </main>
    </>
  )
}

export default App
