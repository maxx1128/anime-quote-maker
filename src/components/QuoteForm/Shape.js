import React from "react";
import RadioItems from "./../RadioItems";
import RangeSlider from "./../RangeSlider";

import { shapes } from "../QuoteWrapper/state";

const Shape = ({ state, update }) => {
  const { shape, shapeSize, shapePosition } = state;

  return (
    <div className="qig-l-wrapper__form-item">
      <h4 className="qig-l-wrapper__form-header">
        Set a Quote Shape
      </h4>

      <div>
        <p className="qig-p--short-label">Quote Shapes</p>
        <RadioItems allItems={shapes} selected={shape} updateSection={update().shape} />
      </div>

      <br />

      <div>
        <RangeSlider
          label={"Shape Size"}
          value={shapeSize}
          max={300}
          unit={"px"}
          updateValue={update().shapeSize} />

        <RangeSlider
          label={"Shape Position"}
          value={shapePosition}
          max={100}
          unit={"%"}
          updateValue={update().shapePosition} />
      </div>
    </div>
  )
};

export default Shape;
