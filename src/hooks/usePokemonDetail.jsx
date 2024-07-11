import { useEffect, useState } from "react";
import { POKEMON_URL } from "../utility/config";
import axios from "axios";

const usePokemonDetail = ({id: pokemonId}) => {
    const [pokemonDetail, setPokemonDetail] = useState();

    useEffect(()=>{
        if(pokemonId){
            getPokemonDetail();
        }
    },[pokemonId])

    const getPokemonDetail = async () => {
        if(pokemonId){
            const url = `${POKEMON_URL}/${pokemonId}`;
            const res = await axios.get(url);
            if(res?.data){
                setPokemonDetail(res.data);
            };
        };
    };

    return {
        pokemonDetail,
    };
};

export default usePokemonDetail;