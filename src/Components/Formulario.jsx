import { useState } from 'react'

function Formulario() {


    const [notas, setNotas] = useState('');
    const [notasLista, setnotasLista] = useState([]);
    const dato = (e) => {setNotas(e.target.value)}


    const Guardarnota = (e)=>{
        e.preventDefault();
        if(notas.trim() === ''){
          alert('Por favor ingrese un dato')
          return
        }
        setnotasLista([...notasLista, notas])
        setNotas('')
      } 

      const eliminarnota = (index)=>{
        const actulizarNota = notasLista.filter((_, i) => i !== index)
        setnotasLista(actulizarNota)
      }

  return (
    <>
      <form  className='flex gap-4 flex-col border p-7 shadow-xl'>
        <label htmlFor="">
          <h2 className='mb-2'>Nota</h2>
          <input onChange={dato} className='p-2 text-2xl border'
          name='nota'
          type="text"
          value={notas}
          placeholder='Escribir la nota' 
          />
        </label>

        <button className='mt-2 cursor-pointer rounded bg-blue-300 w-[100px] h-[50px] hover:bg-blue-200 p-3'
        onClick={Guardarnota}>
          Guardar
        </button>
      </form>

      <ul className='bg-gray-200 p-8 rounded box-border  min-w-[500px] min-h-[200px] shadow-xl'>
            {notasLista.length > 0 ? (
                notasLista.map((nota, index) => (
                <li className='bg-blue-300  m-2 p-3 rounded-xl flex items-center justify-between' key={index}>
                    {nota}
                    <button className='bg-red-300 ml-2 p-2  rounded-xl hover:bg-red-200' onClick={() => eliminarnota(index)}>
                    Eliminar
                    </button>
                </li>
                ))
            ) : (
                <p>No hay notas</p>
            )}
</ul>

    </>
  )
}

export default Formulario
