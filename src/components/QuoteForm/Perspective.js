import React from "react";
import RangeSlider from "./../RangeSlider";

const Perspective = ({ rotateX, updateRotateX, rotateY, updateRotateY, perspective, updatePerspective, perspectiveOriginX, updatePerspectiveOriginX, perspectiveOriginY, updatePerspectiveOriginY, resetPerspective }) => (
  <div className="qig-l-wrapper__form-item">
    <h4 className="qig-l-wrapper__form-header">
      Add some Perspective
    </h4>

    <RangeSlider
      label={"Perspective"}
      value={perspective}
      max={"1500"}
      updateValue={updatePerspective} />

    <RangeSlider
      label={"Perspective Origin (X)"}
      value={perspectiveOriginX}
      max={"100"}
      step={"0.5"}
      updateValue={updatePerspectiveOriginX} />

    <RangeSlider
      label={"Perspective Origin (Y)"}
      value={perspectiveOriginY}
      max={"100"}
      step={"0.5"}
      updateValue={updatePerspectiveOriginY} />

    <RangeSlider
      label={"Rotate (X)"}
      value={rotateX}
      max={"360"}
      step={"1"}
      updateValue={updateRotateX} />

    <RangeSlider
      label={"Rotate (Y)"}
      value={rotateY}
      max={"360"}
      step={"1"}
      updateValue={updateRotateY} />

    <button onClick={() => resetPerspective()}>
      Reset Perspective
    </button>
  </div>
);

export default Perspective;
