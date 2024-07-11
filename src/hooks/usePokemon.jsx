import { useEffect, useState } from "react";
import { POKEMON_SPRITES_URL, POKEMON_URL} from "../utility/config";
import axios from "axios";

const usePokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [nextUrl, setNextUrl] = useState(POKEMON_URL);
    const [haveMorePokemon, setHaveMorePokemon] = useState(true);
    const [pokemonType, setPokemonType] = useState();

    useEffect(()=>{    
        getPokemon();    
    },[]);

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

    return {
        pokemon,
        getNextPokemon: getPokemon,
        haveMorePokemon,
    };

};

export default usePokemon;