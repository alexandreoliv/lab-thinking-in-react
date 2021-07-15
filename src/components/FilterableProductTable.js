import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {
    console.log('props from FilterableProductTable: ', props)

    return (
        <>
        <SearchBar setQuery={props.setQuery} />
        <ProductTable products={props.products} state={props.state} />
        </>
    )
}

export default FilterableProductTable;