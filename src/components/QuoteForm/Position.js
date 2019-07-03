import React from "react";
import RadioItems from "./../RadioItems";

import { sections } from "./../QuoteProps";

const Position = ({ selected, updateSection }) => (
  <div className="qig-l-wrapper__form-item qig-l-controls__position">
    <h4 className="qig-l-wrapper__form-header">
        Change the Quote's Position
    </h4>
    <RadioItems allItems={sections} selected={selected} updateSection={updateSection} />
  </div>
);

export default Position;
