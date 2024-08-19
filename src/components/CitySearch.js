// src/components/CitySearch.js

import { useState } from "react";

const CitySearch = () => {
    return (
      <div id="city-search" data-testid="city-search">
        <input
        type="text"
        className="city"
                placeholder="Search for a city"
      />
      </div>
    )
   }
   
   export default CitySearch;