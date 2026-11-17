import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Person from './componentes/person'
import DBZ from './componentes/dbz'
import Filme from './componentes/filmes'
import Pokemon from './componentes/pokemon'

function App() {
  return (
    <div className='body'>
      < Person/>

      < DBZ/>

      < Filme/>
      <section className='pokemon-box'>
        <div className='myPokemon'>
      < Pokemon/>
        </div>
      </section>

      
      
    </div>
  )
}

export default App


