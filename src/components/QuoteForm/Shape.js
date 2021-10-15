import React from "react";
import RadioItems from "./../RadioItems";
import RangeSlider from "./../RangeSlider";

import { shapes } from "./../QuoteProps";

const Shape = ({ shape, updateShape, shapeSize, updateShapeSize, shapePosition, updateShapePosition }) => (
  <div className="qig-l-wrapper__form-item">
    <h4 className="qig-l-wrapper__form-header">
      Set a Quote Shape
    </h4>

    <div>
      <p className="qig-p--short-label">Quote Shapes</p>
      <RadioItems allItems={shapes} selected={shape} updateSection={updateShape} />
    </div>

    <br />

    <div>
      <RangeSlider
        label={"Shape Size"}
        value={shapeSize}
        max={300}
        unit={"px"}
        updateValue={updateShapeSize} />

      <RangeSlider
        label={"Shape Position"}
        value={shapePosition}
        max={100}
        unit={"%"}
        updateValue={updateShapePosition} />
    </div>
  </div>
);

export default Shape;
