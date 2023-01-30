
const SortBy = ({setSortBy}) => {

    return (
        <div className="select-container">
            <div className="sort-by__title">Sort by:</div>
                <select className="select-sort" name="sort-by" onChange={(e) => {setSortBy(e.target.value)
                console.log(e.target.value)}
                }>
                    <option value="PriceAscending">Price - low to high</option>
                    <option value="PriceDecending">Price - high to low</option>
                    <option value="AlphabetAscending">Alphabet Ascending</option>
                    <option value="AlphabetDecending">Alphabet Decending</option>
            </select>
        </div>
    )
}


export default SortBy;