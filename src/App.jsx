import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Header from './components/Header'
import Skills from './pages/Skills'
import Proyects from './pages/Proyects'
import Contacto from './pages/Contacto'
import AboutUs from './components/AboutUs'

function App() {

  return (
    <>
    {/* <BrowserRouter>
        <Routes>
              <Route path="/" element={<MainLayout/>}>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/aboutUs" element="#"/>
                  <Route path="/projects" element="#"/>
                  <Route path="/skills" element="#"/>
                  <Route path="/contact" element="#"/>
              </Route>
        </Routes>
    </BrowserRouter> */}
      <main className="bg-[#f4f2ee] min-h-screen">
            <Header/>
            <div className="flex gap-5 mx-[5rem] pt-16 justify-center">
              <div className='flex flex-col gap-2 h-full'>
                <div id="section1" className="flex flex-col bg-[#f4f2ee] gap-2">
                    <div className="bg-white w-[900px] rounded-lg pb-5">
                      <Home/>
                    </div>
                    <div className="bg-white w-[900px] rounded-lg pb-5">
                      <AboutUs />
                    </div>
                </div>
                <div id="section2" className="bg-white w-[900px] rounded-lg pb-5">
                    <Skills/>
                </div>
                <div id="section3" className="bg-white w-[900px] rounded-lg pb-5">
                    <Proyects/>
                </div>
                <div id="section4" className="bg-white min-h-screen w-[900px] rounded-lg pb-5">
                    <Contacto/>
                </div>
                
              </div>
              <div className="flex flex-col justify-center gap-5 bg-white border rounded-lg max-w-[300px] h-[200px] p-5">
                  <div className='flex flex-col gap-1'>
                    <h1 className='text-xl font-medium'>Idioma del perfil</h1>
                    <p className='text-sm text-[#919191]'>Español</p>
                  </div>
                  <div className='border'></div>
                  <div className='flex flex-col gap-1'>
                    <h1 className='text-xl font-medium'>URL y perfil público</h1>
                    <p className='text-sm text-[#919191]'>www.linkedin.com/in/orlando-marcelo-conci-ab235b228</p>
                  </div>
              </div>
            </div>
            <div className="fixed bottom-0 z-50 w-full bg-white border text-center text-sm text-medium">Conci Orlando Marcelo - Full Stack Web Developer</div>
            {/* <Footer/> */}
        </main>
      
    
      
    </>
  )
}

export default App
