import React from "react";
import RangeSlider from "./../RangeSlider";

const Size = ({ width, height, updateWidth, updateHeight }) => (
  <div className="qig-l-wrapper__form-item qig-l-controls__size">
    <h4 className="qig-l-wrapper__form-header">
      Change the Quote Size
    </h4>

    <div className="qig-l-slider__container">
      <RangeSlider
        label={"Width"}
        value={width}
        min={300}
        max={1200}
        unit={"px"}
        updateValue={updateWidth} />

      <RangeSlider
        label={"Height"}
        value={height}
        min={300}
        max={1200}
        unit={"px"}
        updateValue={updateHeight} />
    </div>

    <br />

    <div className="qig__long-buttons-wrapper">
      <button onClick={() => {updateHeight(700), updateWidth(700)}}>
        Square
      </button>

      <button onClick={() => {updateHeight(500), updateWidth(800)}}>
        Landscape
      </button>

      <button onClick={() => {updateHeight(800), updateWidth(500)}}>
        Portrait
      </button>

      <button onClick={() => {updateHeight(667), updateWidth(375)}}>
        iPhone 8
      </button>
    </div>
  </div>
);

export default Size;
