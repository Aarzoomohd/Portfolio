import React from 'react'
import { Toaster } from "sonner";
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App