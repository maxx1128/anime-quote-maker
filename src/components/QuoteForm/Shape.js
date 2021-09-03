import React from "react";
import RadioItems from "./../RadioItems";

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

    <div className="qig-l-wrapper__form-multi">
      <label className="qig-l-slider__label">
        <span>
          Shape Size: <strong>{shapeSize} pixels</strong>
        </span>
        <input type="range" min="1" max="300" name="size" value={shapeSize} onChange={updateShapeSize} />
      </label>

      <label className="qig-l-slider__label">
        <span>
          Shape Position: <strong>{shapePosition}%</strong>
        </span>
        <input type="range" min="0" max="100" name="size" value={shapePosition} onChange={updateShapePosition} />
      </label>
    </div>
  </div>
);

export default Shape;
