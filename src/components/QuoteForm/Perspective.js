import React from "react";
import RangeSlider from "./../RangeSlider";

const Perspective = ({ state, update, reset }) => {
  const { transformRotateX, transformRotateY, perspective, perspectiveOriginX, perspectiveOriginY } = state;

  return (
    <div className="qig-l-wrapper__form-item">
      <h4 className="qig-l-wrapper__form-header">
        Add some Perspective
      </h4>

      <RangeSlider
        label={"Perspective"}
        value={perspective}
        max={"1500"}
        updateValue={update().perspective} />

      <RangeSlider
        label={"Perspective Origin (X)"}
        value={perspectiveOriginX}
        max={"100"}
        step={"0.5"}
        updateValue={update().perspectiveOriginX} />

      <RangeSlider
        label={"Perspective Origin (Y)"}
        value={perspectiveOriginY}
        max={"100"}
        step={"0.5"}
        updateValue={update().perspectiveOriginY} />

      <RangeSlider
        label={"Rotate (X)"}
        value={transformRotateX}
        max={"360"}
        step={"1"}
        updateValue={update().transformRotateX} />

      <RangeSlider
        label={"Rotate (Y)"}
        value={transformRotateY}
        max={"360"}
        step={"1"}
        updateValue={update().transformRotateY} />

      <button onClick={() => reset().perspective()}>
        Reset Perspective
      </button>
    </div>
  )
};

export default Perspective;
