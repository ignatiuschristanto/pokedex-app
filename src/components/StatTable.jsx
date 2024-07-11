
const StatTable = ({pokemonDetail}) => {
    return (
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
    )
}

export default StatTable;