import React from "react";

const RangeSlider = ({ label, value, unit = "px", min = "0", max, updateValue, step = "1", inline = false }) => (
  <React.Fragment>
    <label htmlFor={`filter-${label}`} className="qig-l-slider__label">
      <span className={inline ? "qig-l-slider__label-inline-text" : ""}>
        {label}: <input type="number" min={min} max={max} value={value} step={step} onChange={updateValue} /> {unit}
      </span>
      <input type="range" min={min} max={max} id={`filter-${label}`} name={`filter-${label}`} value={value} onChange={updateValue} step={step} />
    </label>

    {!inline &&
      <br />
    }
  </React.Fragment>
);

export default RangeSlider;
