import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let  personObj = {
    name: "Parakh",
    age: 24,
    location: "pune",
    company: "XYZ"
  }

  let personArr = [
    1, 2, 3, 4
  ]

  return (
    <>
        <h1 className='bg-green-400 tex{{t-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
        <Card channel="Chai_Aur_Code" myObj={personObj} myArr={personArr} btnText="Click to Know"/>
        <Card channel="Chai_Aur_React"/>
    </>
  )
}

export default App
