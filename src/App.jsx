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
          <article id="years" >
            <Link to='#2025' className='years'>2025</Link>
            <Link to='32026' className='years'>2026</Link>
          </article>
          <article id='months'>
            <Link to='#Jan' className='months'>January</Link>
            <Link to='#Feb' className='months'>February</Link>
            <Link to ='#Mar' className='months'>March</Link>
            <Link to='#Apr' className='months'>April</Link>
            <Link to='May' className='months'>May</Link>
            <Link to='#Jun' className='months'>June</Link>
            <Link to='#Jul' className='months'>July</Link>
            <Link to='#Aug' className='months'>August</Link>
            <Link to='#Sep' className='months'>September</Link>
            <Link to='#Oct' className='months'>October</Link>
            <Link to='#Nov' className='months'>November</Link>
            <Link to='#Dec'className='months'>December</Link>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
