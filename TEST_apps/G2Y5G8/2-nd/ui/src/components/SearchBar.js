import { useState } from 'react';

const SearchBar = ({ sendReq }) => {
   const [search, setSearch] = useState('');

   const handleInputChange = ev => {
      setSearch(ev.target.value);
   }

   const handleClick = () => {
      sendReq(search);
      setSearch('');
   }

   return (<div className={'container search-bar'}>
      <div>
         <label>Search: <input type="text" onChange={handleInputChange} value={search}/></label>
         <button onClick={handleClick}>Find</button>
      </div>
      <div>

      </div>
   </div>);
}

export default SearchBar;
