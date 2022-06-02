import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardPoke from './components/CardPoke';


function App() {

  const [listPokemon, setlistPokemon] = useState([])
  const [pokemonEscolhido, setpokemonEscolhido] = useState('')

  const onChangeSelect = (event) => {
    setpokemonEscolhido(event.target.value)
  }

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((resp) => {
        setlistPokemon(resp.data.results)
      })
  }, [])

  return (
    <div className="App">

      <select onChange={onChangeSelect}>
        <option> Selecione</option>
        {listPokemon.map(pokemon => {
          return (
            <option value={pokemon.name}
              key={pokemon.name}>{pokemon.name}</option>
          )
        })}
      </select>

      {pokemonEscolhido && <CardPoke pokemon={pokemonEscolhido} />}
    </div>
  );
}

export default App;
