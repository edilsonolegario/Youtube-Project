import { useState } from 'react'
import './App.css'
import Header from './assets/Components/Header'
import Slider from './assets/Components/Slider'
import ProductionHouse from './assets/Components/ProductionHouse'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className=''>
        <Header/>
        <Slider/>
        <ProductionHouse/>
      </div>
  )
}

export default App
