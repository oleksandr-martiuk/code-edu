import React from 'react';

import Tour from "./Tour";
import Header from "./Header";

const Activities = ({ tours = [] }) => {
   return (<>
      {
         tours && (<>
            <hr/>
            <Header/>
            {tours?.map((tour, index) => <Tour key={tour.id} tour={tour} order={++index}/>)}
         </>)
      }
   </>);
}

export default Activities;
