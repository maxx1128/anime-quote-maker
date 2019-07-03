import React from "react";
import RadioItems from "./../RadioItems";

import { filters } from "../QuoteProps";

const Filters = ({ setFilters, updateFilters }) => (
  <div className="qig-l-wrapper__form-item">
    <h4 className="qig-l-wrapper__form-header">
        Restyle the Image
    </h4>
    <RadioItems allItems={filters} selected={setFilters} updateSection={updateFilters} type="checkbox" />
  </div>
);

export default Filters;
