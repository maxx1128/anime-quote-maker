import React from "react";
import RangeSlider from "./../RangeSlider";

const Filters = ({ contrast, updateContrast, hueRotate, updateHueRotate, saturate, updateSaturate, brightness, updateBrightness, sepia, updateSepia, blur, updateBlur, invert, updateInvert, fullFilters, updateFullFilter, randomFilters }) => (
  <div className="qig-l-wrapper__form-item">
    <h4 className="qig-l-wrapper__form-header">
      Restyle the Image
    </h4>

    <RangeSlider
      label={"Contrast"}
      value={contrast}
      unit={"%"}
      max={"400"}
      updateValue={updateContrast} />

    <RangeSlider
      label={"Hue-Rotate"}
      value={hueRotate}
      unit={"deg"}
      max={"360"}
      updateValue={updateHueRotate} />

    <RangeSlider
      label={"Saturation"}
      value={saturate}
      unit={"%"}
      max={"400"}
      updateValue={updateSaturate} />

    <RangeSlider
      label={"Brightness"}
      value={brightness}
      unit={"%"}
      max={"400"}
      updateValue={updateBrightness} />

    <RangeSlider
      label={"Sepia"}
      value={sepia}
      unit={"%"}
      max={"100"}
      updateValue={updateSepia} />

    <RangeSlider
      label={"Blur"}
      value={blur}
      max={"10"}
      step={"0.1"}
      updateValue={updateBlur} />

    <label htmlFor="filterInvert">
      Invert
    </label>
    <input type="checkbox" id="filterInvert" onChange={() => updateInvert(invert > 0 ? 0 : 100)} name="filterInvert" value={100} checked={invert > 0} />

    <h4>
      Preset Filters
    </h4>

    <div className="qig__long-buttons-wrapper">
      {fullFilters.map((filter, i) =>
        <button key={i} onClick={() => updateFullFilter(filter)}>
          {filter["label"]}
        </button>
      )}

      <button onClick={() => randomFilters()}>
        Random
      </button>
    </div>
  </div>
);

export default Filters;
