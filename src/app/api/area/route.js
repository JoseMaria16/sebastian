import {  NextResponse  } from 'next/server'

export function GET(){
    const data = [
        {
            "area": "Ciencia",
            "temas" : [
                {
                    "title": "Fisica"
                }
            ]
        },{
            "area": "Matematica",
            "temas" : [
                {
                    "title": "trigo"
                }
            ]
        },
    ]
    return NextResponse.json(data)
}