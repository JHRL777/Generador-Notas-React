import { useState } from 'react'
import './App.css'
import Formulario from './Components/Formulario'

const datos=['Video games','Programacion','en vivio']

function App() {

  return (
    <>
    
    
    <div className='flex flex-col mt-5 justify-center items-center gap-8'>
      <h1 className='text-[5rem]'>Generador de notas React</h1>
      <Formulario/>

      
    </div>
    </>
  )
}

export default App
