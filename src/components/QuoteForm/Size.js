import React from "react";
import RangeSlider from "./../RangeSlider";

const Size = ({ state, update }) => (
  <div className="qig-l-wrapper__form-item qig-l-controls__size">
    <h4 className="qig-l-wrapper__form-header">
      Change the Quote Size
    </h4>

    <div className="qig-l-slider__container">
      <RangeSlider
        label={"Width"}
        value={state.width}
        min={300}
        max={1200}
        unit={"px"}
        updateValue={update().width} />

      <RangeSlider
        label={"Height"}
        value={state.height}
        min={300}
        max={1200}
        unit={"px"}
        updateValue={update().height} />
    </div>

    <br />

    <div className="qig__long-buttons-wrapper">
      <button onClick={() => {update().height(700), update().width(700)}}>
        Square
      </button>

      <button onClick={() => {update().height(500), update().width(800)}}>
        Landscape
      </button>

      <button onClick={() => {update().height(800), update().width(500)}}>
        Portrait
      </button>

      <button onClick={() => {update().height(667), update().width(375)}}>
        iPhone 8
      </button>
    </div>
  </div>
);

export default Size;
