import React from "react";
import RangeSlider from "./../RangeSlider";

const Transform = ({ verticalLimit, horizontalLimit, boxShadow, updateBoxShadow, boxShadowColor, updateBoxShadowColor, borderRadius, updateBorderRadius, opacity, updateOpacity, scaleX, updateScaleX, scaleY, updateScaleY, skewX, updateSkewX, skewY, updateSkewY, translateX, updateTranslateX, translateY, updateTranslateY, rotateFull, updateRotateFull, resetTransforms }) => (
  <div className="qig-l-wrapper__form-item">
    <h4 className="qig-l-wrapper__form-header">
      Transform the Quote
    </h4>

    <label htmlFor="box-shadow-color" >
      Box Shadow Color
      <input type="color" id="box-shadow-color" name="box-shadow-color" onChange={updateBoxShadowColor} value={boxShadowColor} />
    </label>

    <br />
    <br />

    <RangeSlider
      label={"Box Shadow"}
      value={boxShadow}
      max={"1"}
      unit={""}
      step={"0.025"}
      updateValue={updateBoxShadow} />

    <RangeSlider
      label={"Opacity"}
      value={opacity}
      max={"1"}
      unit={""}
      step={"0.025"}
      updateValue={updateOpacity} />

    <RangeSlider
      label={"Border Radius"}
      value={borderRadius}
      max={"150"}
      updateValue={updateBorderRadius} />

    <RangeSlider
      label={"Scale X"}
      value={scaleX}
      max={"5"}
      step={"0.05"}
      updateValue={updateScaleX} />

    <RangeSlider
      label={"Scale Y"}
      value={scaleY}
      max={"5"}
      step={"0.05"}
      updateValue={updateScaleY} />

    <RangeSlider
      label={"Skew X"}
      value={skewX}
      min={"-90"}
      max={"90"}
      updateValue={updateSkewX} />

    <RangeSlider
      label={"Skew Y"}
      value={skewY}
      min={"-90"}
      max={"90"}
      updateValue={updateSkewY} />

    <RangeSlider
      label={"Translate X"}
      value={translateX}
      min={horizontalLimit * -1}
      max={horizontalLimit}
      updateValue={updateTranslateX} />

    <RangeSlider
      label={"Translate Y"}
      value={translateY}
      min={verticalLimit * -1}
      max={verticalLimit}
      updateValue={updateTranslateY} />

    <RangeSlider
      label={"Rotate (Full)"}
      value={rotateFull}
      max={"360"}
      step={"0.05"}
      unit={"deg"}
      updateValue={updateRotateFull} />

    <button onClick={() => resetTransforms()}>
      Reset Transforms
    </button>
  </div>
);

export default Transform;
