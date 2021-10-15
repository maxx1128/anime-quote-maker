import React from "react";
import RangeSlider from "./../RangeSlider";

const Alignment = ({ state, update }) => {
  const { posX, posY } = state;

  return (
    <div className="qig-l-wrapper__form-item qig-l-controls__image-pos">
      <h4 className="qig-l-wrapper__form-header">
          Change the Image Alignment
      </h4>
      <p>
          Both inputs represent the <strong>percentage position</strong> for horizontal and vertical alignment. Based on the image's size, one of these alignments won't change the image.
      </p>
      <div className="qig-l-slider__container">
        <RangeSlider
          label={"Horizontal"}
          value={posX}
          max={100}
          unit={"%"}
          updateValue={update().posX} />

        <RangeSlider
          label={"Vertical"}
          value={posY}
          max={100}
          unit={"%"}
          updateValue={update().posY} />
      </div>
    </div>
  )
};

export default Alignment;
