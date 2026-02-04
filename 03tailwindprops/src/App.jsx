import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  

  return (
    <>
        <h1 className='bg-sky-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
        <Card username="chaiaurcode" btnText="click me"/>
        <Card username="Muhammad usama" btnText="click here"/>
        <Card username="syed wajid"  />
    </>
  )
}

export default App
