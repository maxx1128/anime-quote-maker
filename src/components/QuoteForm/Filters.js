import React from "react";
import RangeSlider from "./../RangeSlider";
import { fullFilters } from "../QuoteWrapper/state";

const Filters = ({ state, update, random }) => {
  const { filterContrast, filterHueRotate, filterSaturate, filterBrightness, filterSepia, filterBlur, filterInvert } = state;

  return (
    <div className="qig-l-wrapper__form-item">
      <h4 className="qig-l-wrapper__form-header">
        Restyle the Image
      </h4>

      <RangeSlider
        label={"Contrast"}
        value={filterContrast}
        unit={"%"}
        max={"400"}
        updateValue={update().contrast} />

      <RangeSlider
        label={"Hue-Rotate"}
        value={filterHueRotate}
        unit={"deg"}
        max={"360"}
        updateValue={update().hueRotate} />

      <RangeSlider
        label={"Saturation"}
        value={filterSaturate}
        unit={"%"}
        max={"400"}
        updateValue={update().saturate} />

      <RangeSlider
        label={"Brightness"}
        value={filterBrightness}
        unit={"%"}
        max={"400"}
        updateValue={update().brightness} />

      <RangeSlider
        label={"Sepia"}
        value={filterSepia}
        unit={"%"}
        max={"100"}
        updateValue={update().sepia} />

      <RangeSlider
        label={"Blur"}
        value={filterBlur}
        max={"10"}
        step={"0.1"}
        updateValue={update().blur} />

      <label htmlFor="filterInvert">
        Invert
      </label>
      <input type="checkbox" id="filterInvert" onChange={() => update().invert(filterInvert > 0 ? 0 : 100)} name="filterInvert" value={100} checked={filterInvert > 0} />

      <h4>
        Preset Filters
      </h4>

      <div className="qig__long-buttons-wrapper">
        {fullFilters.map((filter, i) =>
          <button key={i} onClick={() => update().fullFilter(filter)}>
            {filter["label"]}
          </button>
        )}

        <button onClick={() => random().filters()}>
          Random
        </button>
      </div>
    </div>
  )
};

export default Filters;
