import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Components
import Stylesheet from './components/Stylesheet'
import Header from './components/Header'
import Footer from './components/Footer'
//Pages
import Main from './pages/Main'
import Down from './pages/Down'
import Oops from './pages/Oops'



function App() {
  return (
    <div>
     <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/oops" element={<Oops />} />
          <Route path="/down" element={<Down />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;