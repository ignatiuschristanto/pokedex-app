
const PokemonCard = ({pokemon}) => {
    return(
        <>
            <div className="group my-4 md:w-[20%] w-[50%] text-center rounded-3xl bg-[#EBEBEB] shadow-sm flex flex-col p-4">
                <a href={`/${pokemon.id}`}> 
                    <div className="flex justify-evenly items-center flex-col">
                        <img src={pokemon.sprites} alt={`sprites-${pokemon.id}`} className="object-contain" />
                        <div className="py-2 font-semibold text-lg transition-all duration-500 capitalize">{pokemon.name}</div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default PokemonCard;