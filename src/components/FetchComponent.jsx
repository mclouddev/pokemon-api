import React, { useState } from 'react'
import DisplayPokemon from './DisplayPokemon'
import axios from 'axios'

const FetchComponent = () => {
  const [err, setErr] = useState('')
  const [pokemon, setPokemon] = useState(null)

  const fetchPokemonThen = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response)
        setPokemon(response)
      })
      .catch(err => {
        console.log(err)
        setErr('This pokemon does not exist')
      })
  }

  const fetchPokemonAwait = async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/snorlax')
    let jsonResponse = await response.json()
    setPokemon(jsonResponse)
  }
  const fetchCharizardAwait = async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/charizard')
    let jsonResponse = await response.json()
    setPokemon(jsonResponse)
  }

  const fetchPokemonAxios = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then(response => {
        console.log(response.data)
        setPokemon(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <button onClick={fetchPokemonThen}>Fetch Ditto</button>
      <button onClick={fetchPokemonAwait}>Fetch Snorlax</button>
      <button onClick={fetchCharizardAwait}>Fetch Charizard</button>
      <button onClick={fetchPokemonAxios}>Fetch Pikachu</button>
      {err}
      {
        pokemon ?
          (<DisplayPokemon pokemon={pokemon} />) :
          <h4>Press the button to fetch a Pokemon</h4>
      }
    </div>
  )
}

export default FetchComponent