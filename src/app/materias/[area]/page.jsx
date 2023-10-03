import React from 'react'

async function loadTemas() {
    const res = await fetch('http://localhost:3000/api/materias', { cache: 'no-cache' })
    const data = await res.json()
    return data
}

async function AreaPage({params}) {
  const materias = await loadTemas()
  const materia = materias.find((x) => x.area === params.area)
  const {id, area, temas} = materia
//   console.log(areas);
    return (
    <div className='px-20'>
        <h2 className='capitalize text-2xl'>{area}</h2>
        <div>
        {temas.map((tem) => (
            <h3>{tem.title}</h3>
            ))}
        </div>
    </div>
  )
}

export default AreaPage