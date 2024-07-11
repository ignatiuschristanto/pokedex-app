import { useEffect, useState } from "react";
import { POKEMON_SPRITES_URL, POKEMON_URL, POKEMON_TYPE } from "../utility/config";
import axios from "axios";

const usePokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [nextUrl, setNextUrl] = useState(POKEMON_URL);
    const [haveMorePokemon, setHaveMorePokemon] = useState(true);
    const [selectedPokemonType, setSelectedPokemonType] = useState();

    useEffect(()=>{
        if(selectedPokemonType){
            getPokemonByType();
        }
        else{   
            getPokemon();
        }
    },[selectedPokemonType]);

    useEffect(()=>{
        if(nextUrl === null){
            setHaveMorePokemon(false);
        }
    },[nextUrl]);


    const getPokemonWithSprites = (pokemonData) => {
        let pokemonUrl = new URL(pokemonData.url);
        const pokedexNum = pokemonUrl.pathname.split("/")[4];
        const newPokemonIndex = {
            id: pokedexNum,
            name: pokemonData.name,
            url: pokemonData.url,
            sprites: `${POKEMON_SPRITES_URL}/${pokedexNum}.png`,
        };
        return newPokemonIndex;
    };

    const getPokemon = async () => {
        if(nextUrl){
            const res = await axios.get(`${nextUrl}`);
            if(res?.data?.results){
                const pokemonData = res.data.results.map(item => getPokemonWithSprites(item));
                setPokemon([...pokemon, ...pokemonData]);
                setNextUrl(res.data.next);
            };
        };
    };

    const getPokemonByType = async () => {
        if(selectedPokemonType){
            const res = await axios.get(`${selectedPokemonType.url}`);
            if(res?.data?.pokemon){
                const pokemonDataByType = res.data.pokemon.map(item => getPokemonWithSprites(item.pokemon));
                setPokemon(pokemonDataByType);
                setNextUrl(POKEMON_URL);
            };
        }
    }

    return {
        pokemon,
        setPokemon,
        getNextPokemon: getPokemon,
        haveMorePokemon,
        selectedPokemonType,
        setSelectedPokemonType,
        pokemonTypeList: POKEMON_TYPE
    };

};

export default usePokemon;