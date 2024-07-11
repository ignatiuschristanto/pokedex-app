import { useNavigate, useParams } from "react-router-dom";
import usePokemonDetail from "../hooks/usePokemonDetail";

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
                    <div className="flex flex-row justify-around flex-wrap items-center">
                        <img src={pokemonDetail.sprites.front_default} alt={`sprites-${pokemonDetail.id}`} className="object-contain w-[40%]" />
                        <div className=" my-4 md:w-[40%] w-[100%] h-full text-center rounded-xl bg-[#EBEBEB] shadow-sm flex flex-row justify-center flex-wrap gap-12 p-2">
                            <div className="flex justify-evenly items-center flex-col">
                                <div className="py-2 font-semibold text-lg capitalize">Height</div>
                                <div className="py-2 text-md">{parseFloat(pokemonDetail.height) * 0.1} m</div>
                            </div>
                            <div className="flex justify-evenly items-center flex-col">
                                <div className="py-2 font-semibold text-lg capitalize">Weight</div>
                                <div className="py-2 text-md">{parseFloat(pokemonDetail.weight) * 0.1} kg</div>
                            </div>
                            <div className="flex justify-evenly items-center flex-col">
                                <div className="py-2 font-semibold text-lg capitalize">Abilities</div>
                                {pokemonDetail.abilities.map((item)=>{
                                    return(
                                        <div className="text-md capitalize">{item.ability.name}</div>
                                    )
                                })}
                            </div>
                            <div className="flex justify-evenly items-center flex-col">
                                <div className="py-2 font-semibold text-lg capitalize">Type</div>
                                {pokemonDetail.types.map((item)=>{
                                    return(
                                        <div className="text-md capitalize">{item.type.name}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center py-2">
                        <table className="table-auto border-collapse bg-[#EBEBEB] shadow-sm rounded-md">
                            <thead className="h-10">
                                <tr className="border-b border-b-[#ADADAD]">
                                    {pokemonDetail.stats.map((item) => {
                                        return(
                                            <th className="w-[150px] capitalize">
                                                {item.stat.name}
                                            </th>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody className="h-10">
                                <tr className="text-center">
                                    {pokemonDetail.stats.map((item) => {
                                        return (
                                            <td>{item.base_stat}</td>
                                        )
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
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