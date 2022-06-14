import axios from "axios";
import React, {useState, useEffect} from "react";
import styled from "styled-components";

const ContainerPokemon = styled.div`

`

const CardPoke = (props) =>{

    const [pokemon, setPokemon] = useState({})

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`).then((resp)=>{
            setPokemon(resp.data)
        })
    },[props.pokemon])

    
    return(
        <>
        <ContainerPokemon>

            <h2>{pokemon.name}</h2>
            <p>{pokemon.weight} kg</p>
            
            {pokemon.sprites && <img src={pokemon.sprites.front_shiny} alt={pokemon.name}/> }

        </ContainerPokemon>
        </>
    )
}

export default CardPoke