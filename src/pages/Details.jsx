import { useNavigate, useParams } from "react-router-dom";
import usePokemonDetail from "../hooks/usePokemonDetail";
import PokemonDetail from "../components/PokemonDetail";
import StatTable from "../components/StatTable";

const Details = () => {
    const { id } = useParams();

    const { pokemonDetail } = usePokemonDetail({id});
    
    const navigate = useNavigate();
    const backToPokedex = () => {
        navigate("/")
    }
    
    return(
        <>
            <div className="container m-auto min-h-screen w-screen bg-[#DADADA] pt-8">
                {pokemonDetail?
                    <>
                    <div className="flex justify-center items-center">
                        <div className="text-4xl font-bold capitalize">
                            {pokemonDetail.name} <span className="text-gray-700">#{pokemonDetail.id}</span>
                        </div>

                        {/* pics n data */}
                    </div>
                    <PokemonDetail pokemonDetail={pokemonDetail} />
                    <StatTable pokemonDetail={pokemonDetail} />
                    <div className="flex justify-center items-center py-4">
                        <button
                            type="button"
                            className="rounded-full bg-[#EBEBEB] px-5 py-2 hover:bg-[#dedede] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            onClick={backToPokedex}
                            >
                            <span className="">Back to Pokedex</span>
                        </button>
                    </div>
                    </>
                    :
                    null
                }
            </div>
        </>
    )
}

export default Details;