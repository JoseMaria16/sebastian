import React from 'react'
import Link from 'next/link'

async function loadMaterias() {
    const res = await fetch('http://localhost:3000/api/materias', { cache: 'no-cache' })
    const data = await res.json()
    return data
}


async function Card() {
    const datos = await loadMaterias()
    console.log(JSON.stringify(datos));
    return (
        <div className="px-20 flex flex-wrap gap-10">
            {datos.map((area, i) => (
                <Link href={`/materias/${area.area}`} className={`${area.color === 'green' ? 'bg-green-700 text-white' : 'bg-gray-400'}  rounded-xl px-10 py-3`} key={i}>
                    <h1 className='text-xl capitalize'>{area.area}</h1>
                </Link>
            ))}
        </div>
    )
}

export default Card