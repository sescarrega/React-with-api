import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// id is from routes 
// import params
//destructure params 

// automatically load info from api via useEffect+ useStates
// from api we need axios

const People = () => {
    const {id} = useParams()
    const [people, setPeople] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}/`)
        .then(response => {
            console.log(response.data)
            setPeople(response.data)
        })
        .catch(err => console.log(err))
    },[])


    return (
        <div> 
            <p> hello from  people.jsx!!</p>
            {
                people?
                <div>
                    <h3> Name: {people.name}</h3>
                    <p> id: {id}</p>
                    <p> Height: {people.height}</p>
                    <p> Mass: {people.mass}</p>

                </div>:

                <p> this person is not available </p>
            }
        </div>
    )
}

export default People