import React from 'react'
import Header from './components/Header/header'
import Fotter from './components/Fotter/Fotter'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
    
    <Header/>
    <Outlet/>
    <Fotter/>
    </>
  )
}

export default App
