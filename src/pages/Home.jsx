import CardContainer from "../components/CardContainer";
import usePokemon from "../hooks/usePokemon";

const Home = () => {
    const {pokemon, haveMorePokemon, getNextPokemon} = usePokemon();
    // console.log(pokemon)

    return(
        <>
        <div className="container m-auto min-h-screen w-screen bg-[#DADADA]">
            <div className="py-8 text-5xl font-bold justify-center flex">Pokedex</div>
            <CardContainer pokemon={pokemon} />
            {haveMorePokemon ?
                <div className="flex justify-center items-center py-4">
                    <button
                        type="button"
                        className="rounded-full bg-cyan-500 px-5 py-2 text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        onClick={getNextPokemon}
                        >
                        <span className="">Load More</span>
                    </button>
                </div>
                :null
            }
        </div>
        </>
    )
};

export default Home;