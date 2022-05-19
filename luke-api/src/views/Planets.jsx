import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Planets = () => {
    const {id} = useParams()
    const [ planet, setPlanet] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
        .then(response => {
            console.log(response.data)
            setPlanet(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div> 
            <h1> Planets</h1>
            {
                planet?
                <div> 
                    <h3> Name: {planet.name}</h3>
                    <p> id: {id}</p>
                    <p> Climate:{planet.climate} </p> 
                    <p> Terrain:{planet.terrain} </p> 
                </div> :
                <p> this planet is not available</p>
            }
        </div>
    )
}

export default Planets