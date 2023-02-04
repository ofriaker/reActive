import React from "react";
import classes from './FilterPanel.module.css';

const FilterPanel = ({flavours, handleFlavourFilterChange, selectedFlavours, priceRanges, handlePriceRangeFilterChange, selectedPriceRanges}) => {
    return (
        <div className={classes.leftPanel}>
            <div className={classes.filter}>
                <div className={classes.filterHeader}>Flavour</div>
                <hr></hr>
                <form className={classes.scrollable}>
                    {flavours.map((flavour) => (
                        <div key={flavour._id}>
                            <input className={classes.checkbox}
                            type="checkbox"
                            value={flavour._id}
                            onChange={handleFlavourFilterChange}
                            checked={selectedFlavours.includes(flavour._id)}
                            />
                            <label>{flavour._id}</label>
                        </div>
                    ))}
                </form>
            </div>
            <div className={classes.filter}>
                <div className={classes.filterHeader}>Price Range
                    <hr></hr>
                </div>
                <form className="">
                {priceRanges.map((range) => (
                    <div  key={range.label}>
                        <input className={classes.checkbox}
                        type="checkbox"
                        value={range.label}
                        onChange={handlePriceRangeFilterChange}
                        checked={selectedPriceRanges.includes(range.label)}
                        />
                    <label>{range.label}</label>
                    </div>
                ))}
            </form>
            </div>
        </div>
    );
}

export default FilterPanel;