
const PokemonDetail = ({pokemonDetail}) => {

    return(
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
    )
}

export default PokemonDetail