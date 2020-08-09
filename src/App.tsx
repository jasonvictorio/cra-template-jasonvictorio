import React from 'react'
import { Router, Link } from '@reach/router'

import { Counter } from './features/counter/Counter'
import About from './views/About'
import Home from './views/Home'
import './App.scss'

function App() {
  return (
    <div className='App'>
      <Counter />
      <Router>
        <Home path='/' />
        <About path='/about' />
      </Router>

      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
  )
}

export default App
