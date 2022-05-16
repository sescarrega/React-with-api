import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [pokemons, setPokemons]= useState([])

  const pokemonFetch = ()=> {
    // we can use full crud with this 
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0") 
    // add promise res
    .then(res => {
      console.log(res.data.results);
      setPokemons(res.data.results);
    })
    .catch(err => console.log(err))
    // never omit .catch
  }  
    // how is pokemon fetch and pokemon  related ? 
  return (
    <div> 
      <h1>
        Pokemon
      </h1>
      <button onClick={pokemonFetch}>Show Pokemon</button>
      <div>
        <table>
          <thead>
            <tr>
              <th>
                {/* pokemon image */}
              </th>
              <th>
                pokemon name
              </th>
            </tr>
          </thead>
          <tbody>
              {/*  iterate thru pokemon array to display names and images */}

            {pokemons?  pokemons.map((pokemon, idx)=>  // can call elements whatever you want, use sngle to present elemnt 

                        <tr key={idx}><td> {pokemon.name} </td></tr>

            ): <tr><td> loading</td></tr>}  
            {/*  not showing loading  */}
          </tbody>
            {/* <td> {pokemon.sprites.front_default}</td> */}
        </table>
      </div>



    </div>
  )
}

export default App