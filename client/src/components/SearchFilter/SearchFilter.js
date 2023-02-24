import React, { useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBTableCell, MDBCol } from 'mdb-react-ui-kit';
import Item from "../Item/Item";
import ItemInSearch from "../ItemInSearch/ItemInSearch";


const SearchFilter = ({ products }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);

  };

  const queryReset= () => {
    setQuery("");
  }

  const filteredItems = products.filter((item) => {
    if(query == "") {
        return null;
    }
    return ((item.name != undefined) && item.name.toLowerCase().includes(query.toLowerCase()) ||
            (item.category != undefined) && item.category.toLowerCase().includes(query.toLowerCase()));
  });

  return (
    <div className='col-md-4 mt-3'>
        <form className='d-flex input-group w-auto my-automb-3 mb-md-0'>
            <input className='form-control rounded' placeholder="Search in store" type="text" value={query} onChange={handleInputChange} />
            <span className='input-group-text border-0 d-none d-lg-flex'><i className='fas fa-search'></i></span>
        </form>
        {query != "" && filteredItems.length != 0 && 
        <div style={{ height: '300px', width: "500px", overflowY: 'scroll', textAlign:'left'}}>
            <MDBTable>
                <MDBRow>
                {filteredItems.map((product, index) => (
                    <MDBCol size="4" key={index}><ItemInSearch product={product} queryReset={queryReset}></ItemInSearch></MDBCol>
                ))}
                </MDBRow>
            </MDBTable>
        </div>
        }
    </div>
  );
};

export default SearchFilter;

