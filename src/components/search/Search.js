import React from 'react';
import Header from '../Header/Header';
import Product from '../Home/Product';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  
  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Header onSearch={handleSearchChange}/>
      <Product searchValue={searchValue}/>
    </div>
  )
}

export default Search
