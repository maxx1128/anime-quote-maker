import React from "react";
import RangeSlider from "./../RangeSlider";

const Transform = ({ state, update, reset }) => {
  const { height, width, boxShadow, boxShadowColor, borderRadius, opacity, transformScaleX, transformScaleY, transformSkewX, transformSkewY, transformTranslateX, transformTranslateY, transformRotateFull } = state;

  return (
    <div className="qig-l-wrapper__form-item">
      <h4 className="qig-l-wrapper__form-header">
        Transform the Quote
      </h4>

      <label htmlFor="box-shadow-color">
        Box Shadow Color
        <input type="color" id="box-shadow-color" name="box-shadow-color" onChange={update().boxShadowColor} value={boxShadowColor} />
      </label>

      <br />
      <br />

      <RangeSlider
        label={"Box Shadow"}
        value={boxShadow}
        max={"1"}
        unit={""}
        step={"0.025"}
        updateValue={update().boxShadow} />

      <RangeSlider
        label={"Opacity"}
        value={opacity}
        max={"1"}
        unit={""}
        step={"0.025"}
        updateValue={update().opacity} />

      <RangeSlider
        label={"Border Radius"}
        value={borderRadius}
        max={"150"}
        updateValue={update().borderRadius} />

      <RangeSlider
        label={"Scale X"}
        value={transformScaleX}
        max={"5"}
        step={"0.05"}
        unit={""}
        updateValue={update().transformScaleX} />

      <RangeSlider
        label={"Scale Y"}
        value={transformScaleY}
        max={"5"}
        step={"0.05"}
        unit={""}
        updateValue={update().transformScaleY} />

      <RangeSlider
        label={"Skew X"}
        value={transformSkewX}
        min={"-90"}
        max={"90"}
        updateValue={update().transformSkewX} />

      <RangeSlider
        label={"Skew Y"}
        value={transformSkewY}
        min={"-90"}
        max={"90"}
        updateValue={update().transformSkewY} />

      <RangeSlider
        label={"Translate X"}
        value={transformTranslateX}
        min={width * -1}
        max={width}
        updateValue={update().transformTranslateX} />

      <RangeSlider
        label={"Translate Y"}
        value={transformTranslateY}
        min={height * -1}
        max={height}
        updateValue={update().transformTranslateY} />

      <RangeSlider
        label={"Rotate (Full)"}
        value={transformRotateFull}
        max={"360"}
        step={"0.05"}
        unit={"deg"}
        updateValue={update().transformRotateFull} />

      <button onClick={() => reset().transforms()}>
        Reset Transforms
      </button>
    </div>
  );
}

export default Transform;
