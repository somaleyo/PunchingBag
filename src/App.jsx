import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Hp from './components/HP/hp'
import Bag from './components/Bag/bag'
import Punch from './components/Punch/punch'
function App() {
 

  return (
    <>
      <Hp/>
      <Bag/>
      <Punch/>
    </>
  )
}

export default App
