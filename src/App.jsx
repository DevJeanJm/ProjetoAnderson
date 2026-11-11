import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Person from './componentes/person'
import DBZ from './componentes/dbz'
import Filme from './componentes/filmes'

function App() {
  return (
    <div>
      < Person/>

      < DBZ/>
      
      < Filme/>
      
    </div>
  )
}

export default App


