import React, { useEffect, useState } from 'react';

import Activities from "../components/Activities";
import SearchBar from "../components/SearchBar";

import { getTours } from "../api";

const Home = () => {
   const [tours, setTours] = useState([]);

   const getSearchTours = (search = null) => {
      getTours(search)
         .then(response => response.json())
         .then(data => {
            data && setTours(data)
         });
   }

   useEffect(() => {
      getSearchTours();
   }, []);

   return (<div>
      <SearchBar sendReq={getSearchTours}/>
      <Activities tours={tours}/>
   </div>)
}

export default Home;
