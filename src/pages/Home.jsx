import CardContainer from "../components/CardContainer";
import usePokemon from "../hooks/usePokemon";

const Home = () => {
    const {pokemon, haveMorePokemon, getNextPokemon, pokemonTypeList, setSelectedPokemonType, setPokemon} = usePokemon();

    const handleSelectType = (e, item) => {
        if(item){
            setSelectedPokemonType(item)
        }
        else{
            setPokemon([]);
            setSelectedPokemonType(null);
        }
    }

    return(
        <>
        <div className="container m-auto min-h-screen w-screen bg-[#DADADA]">
            <div className="py-8 text-5xl font-bold justify-center flex">Pokedex</div>
            <div className="flex flex-row py-4 mx-auto justify-center">
                <div className="font-semibold text-lg h-auto px-4">
                    Filter by:
                </div>
                <div className="flex items-center flex-col md:flex-row w-full m-auto justify-center md:gap-2 flex-wrap">
                    {pokemonTypeList.map((item) => (
                        <button
                            className="rounded-full bg-cyan-500 px-5 py-2 text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            onClick={e=> handleSelectType(e, item)}
                        >
                        <span className="">{item.name}</span>
                        </button>
                    ))}
                    <button 
                        onClick={e=> handleSelectType(null)}

                    >
                        Reset Filter
                    </button>
                </div>
            </div>
            <CardContainer pokemon={pokemon} />
            {haveMorePokemon ?
                <div className="flex justify-center items-center py-4">
                    <button
                        type="button"
                        className="rounded-full bg-cyan-500 px-5 py-2 text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        onClick={getNextPokemon}
                        >
                        <span className="">Load More Pokemon</span>
                    </button>
                </div>
                :null
            }
        </div>
        </>
    )
};

export default Home;