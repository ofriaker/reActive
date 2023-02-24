import React from 'react';

const SortBy = ({sortByOptions, handleSortChange}) => {
    return (
        <div className="select-container">
            <div>Sort by</div>
                <select className="select-sort" name="sort-by" onChange={(e) => {handleSortChange(e.target.value)}}>
                        {sortByOptions.map((option) => (
                            <option key={option.lable} value={option.lable}>{option.lable}</option>
                        ))}
                </select>
        </div>
    )
}

export default SortBy;