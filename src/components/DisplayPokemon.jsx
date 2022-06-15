import React from 'react'

const DisplayPokemon = (props) => {
  const { pokemon } = props
  return (
    <div className="card">
      <h1>{pokemon.forms[0].name}</h1>
      <img src={pokemon.sprites.front_default} alt='' />
      <img src={pokemon.sprites.back_default} alt='' />

      <table className='table'>
        <thead>
          <tr>
            <th> </th>
            <th>Abilities:</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemon.abilities.map((ability, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{ability.ability.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <table className='table'>
        <thead>
          <tr>
            <th> </th>
            <th>Items:</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemon.held_items.map((held_items, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{held_items.item.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <table className='table'>
        <thead>
          <tr>
            <th> </th>
            <th>Types:</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemon.types.map((types, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{types.type.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default DisplayPokemon