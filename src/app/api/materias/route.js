import {  NextResponse  } from 'next/server'


export function GET(){
    const data = [
        {
            "id": 1,
            "area": "ciencia",
            "color": "green",
            "temas" : [
                {
                    "title": "Fisica"
                },
                {
                    "title": "Química"
                },
                {
                    "title": "Biología"
                },
                {
                    "title": "Astronomía"
                },
                {
                    "title": "Geología"
                }
            ]
        },
        {
            "id": 2,
            "area": "matematica",
            "temas" : [
                {
                    "title": "Trigo"
                },
                {
                    "title": "Álgebra"
                },
                {
                    "title": "Geometría"
                },
                {
                    "title": "Cálculo"
                },
                {
                    "title": "Estadística"
                }
            ]
        },
        {
            "id": 3,
            "area": "historia",
            "temas" : [
                {
                    "title": "Revolución Francesa"
                },
                {
                    "title": "Antigua Roma"
                },
                {
                    "title": "Edad Media"
                },
                {
                    "title": "Primera Guerra Mundial"
                },
                {
                    "title": "Civilizaciones Antiguas"
                }
            ]
        },
        {
            "id": 4,
            "area": "arte",
            "temas" : [
                {
                    "title": "Renacimiento"
                },
                {
                    "title": "Impresionismo"
                },
                {
                    "title": "Arquitectura Moderna"
                },
                {
                    "title": "Arte Contemporáneo"
                },
                {
                    "title": "Escultura Clásica"
                }
            ]
        },
        {
            "id": 5,
            "area": "tecnologia",
            "temas" : [
                {
                    "title": "Inteligencia Artificial"
                },
                {
                    "title": "Desarrollo Web"
                },
                {
                    "title": "Seguridad Informática"
                },
                {
                    "title": "Redes de Computadoras"
                },
                {
                    "title": "Diseño de Interfaz"
                }
            ]
        }
    ];
    return Response.json(data)
}
