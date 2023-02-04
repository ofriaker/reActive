import ItemsGallery from "../ItemsGallery/ItemsGallery";
import classes from './Catagory.module.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SortBy from "../SortBy/SortBy";
import FilterPanel from "../FilterPanel/FilterPanel";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchAllAvailableFlavoursByCategory } from '../../store/middlewares/products';
import { selectProducts} from '../../store/selectors/products';

const Catagory = () => {

  const sortByOptions = [{ lable:"Popularity" },
                         { lable:"Price - low to high" },
                         { lable:"Price - high to low" },
                         { lable:"Name - Alphabetically Ascending" },
                         { lable:"Name -Alphabetically Decending" }];
  
  const priceRanges = [{ label: "Less than 10$", range: [0, 10] },
                       { label: "10$ - 25$", range: [0, 25] },
                       { label: "25$ - 50$", range: [25, 50] },
                       { label: "50$ - 100$", range: [50, 100] },
                       { label: "More than 100$", range: [100, Infinity]}];

  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [selectedFlavour, setSelectedFlavour] = useState([]);
  const [selectedSortBy, setSelectedSortBy] = useState([{selectedSortBy: sortByOptions[0]}]);
  const [availableFlavours, setAvailableFlavours] = useState([]);

  useEffect(() => {
    dispatch(fetchAllProducts());  
  }, []); 

  useEffect(() => {
    initStates();
  }, [id]);

  useEffect(() => {
    applyFilters();
  }, [selectedFlavour, selectedPriceRange, selectedSortBy, id]);

  const initStates = () => {
    setSelectedFlavour([]);
    setSelectedPriceRange([]);
    if (id != null) {
      fetchAllAvailableFlavoursByCategory(id).then((flavours) => {
        setAvailableFlavours(flavours);
      });
    }
  }

  const handleSortChange = (sortOption) => {
    setSelectedSortBy(sortOption);
  };

  const handlePriceRangeFilterChange = (e) => {
    const label = e.target.value;
    
    if (selectedPriceRange.includes(label)) {
      setSelectedPriceRange(selectedPriceRange.filter((f) => f !== label));
    } else {
      setSelectedPriceRange([...selectedPriceRange, label]);
    }
  };

  const handleFlavourFilterChange = (e) => {
    const label = e.target.value;

    if (selectedFlavour.includes(label)) {
      setSelectedFlavour(selectedFlavour.filter((f) => f !== label));
    } else {
      setSelectedFlavour([...selectedFlavour, label]);
    }
  };

  const applyFilters = () => {
    if (id == null && 
        selectedFlavour.length === 0 &&
        selectedPriceRange.length === 0 &&
        selectedSortBy.length === 0) {
      setFilteredProducts(products);
    } else {
        let updatedList = products;

        if(id != null) {
          updatedList = products.filter((product) => product.category == id);
        }

        if (selectedSortBy.length > 0) {
          if (selectedSortBy == sortByOptions[0].lable) {
            updatedList.sort((a, b) => b.rate - a.rate);
          } else if (selectedSortBy == sortByOptions[1].lable) {
              updatedList.sort((a, b) => a.price - b.price);
          } else if (selectedSortBy == sortByOptions[2].lable) {
              updatedList.sort((a, b) => b.price - a.price);
          } else if (selectedSortBy == sortByOptions[3].lable) {
              updatedList.sort((a, b) => a.name.localeCompare(b.name));
          } else if (selectedSortBy == sortByOptions[4].lable) {
              updatedList.sort((a, b) => b.name.localeCompare(a.name));    
          }
        }
    
        if (selectedFlavour.length > 0) {
          updatedList = updatedList.filter((product) =>
          selectedFlavour.some((flavour) => product.flavours.includes(flavour)));
        }

        if (selectedPriceRange.length > 0) {
            updatedList = updatedList.filter((product) => selectedPriceRange.some((range) => {
              const [min, max] = priceRanges.find((f) => f.label === range).range;
              return product.price >= min && product.price <= max;
            }));
        }

      setFilteredProducts(updatedList);
    }
  }

  return (
    <div>
      <FilterPanel flavours={availableFlavours}
                    handleFlavourFilterChange={handleFlavourFilterChange}
                    selectedFlavours={selectedFlavour}
                    priceRanges={priceRanges}
                    handlePriceRangeFilterChange={handlePriceRangeFilterChange}
                    selectedPriceRanges={selectedPriceRange}>
      </FilterPanel>
      <h1 className={classes.title}>{id}</h1>
      <SortBy sortByOptions={sortByOptions} handleSortChange={handleSortChange}></SortBy>
      <hr></hr>
      <ItemsGallery products={filteredProducts}></ItemsGallery> 
    </div>
  );
}
  
export default Catagory;