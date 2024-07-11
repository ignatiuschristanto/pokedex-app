import PokemonCard from "./Card";

const CardContainer = ({pokemon}) => {

    return(
        <>
            {pokemon ?
                <div className="flex items-center flex-col md:flex-row w-full m-auto justify-center md:gap-10 flex-wrap">
                    {pokemon.map((item, index) => (
                        <PokemonCard pokemon = {item} key={index} />
                        
                    ))}
                </div>
                :
                null
            }
</>
    )
}

export default CardContainer;