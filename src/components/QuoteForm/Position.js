import React from "react";
import RangeSlider from "./../RangeSlider";
import { positions } from "../QuoteWrapper/state";

const LocationSlider = ({label, value, updateValue, limit}) => (
  <div>
    <label htmlFor={label} className={`qig-l-slider__label ${isNaN(value) ? 'qig-l-slider__label--disabled' : ''}`}>
      <span className="qig-l-slider__label-inline-text">
        {label}:
        {isNaN(value)
          ? <strong>None</strong>
          : <input type="number" min="0" max={limit} value={value} onChange={updateValue} />
        }
      </span>
      <input type="range" min="0" max={limit} name={label} value={isNaN(value) ? 0 : value} onChange={updateValue} />
    </label>
    <button onClick={() => updateValue('auto')}>
      Set to None
    </button>
  </div>
);

const Position = ({ state, update }) => {
  const { quoteTop, quoteRight, quoteBottom, quoteLeft, height, width, paddingTop, paddingRight, paddingBottom, paddingLeft } = state;

  return (
    <div className="qig-l-wrapper__form-item qig-l-controls__position">
      <h4 className="qig-l-wrapper__form-header">
        Change the Quote's Position
      </h4>

      <div className="qig-l-slider__container">
        <LocationSlider
          label={"Top"}
          value={quoteTop}
          updateValue={update().quoteTop}
          limit={height} />

        <LocationSlider
          label={"Right"}
          value={quoteRight}
          updateValue={update().quoteRight}
          limit={width} />

        <LocationSlider
          label={"Bottom"}
          value={quoteBottom}
          updateValue={update().quoteBottom}
          limit={height} />

        <LocationSlider
          label={"Left"}
          value={quoteLeft}
          updateValue={update().quoteLeft}
          limit={width} />
      </div>

      <br />

      <h4 className="qig-l-wrapper__form-header">
        Change the Quote's Padding
      </h4>

      <div className="qig-l-slider__container">
        <RangeSlider
          label={"Top"}
          inline={true}
          value={paddingTop}
          max={height / 2}
          unit={""}
          updateValue={update().paddingTop} />

        <RangeSlider
          label={"Right"}
          inline={true}
          value={paddingRight}
          max={width / 2}
          unit={""}
          updateValue={update().paddingRight} />

        <RangeSlider
          label={"Bottom"}
          inline={true}
          value={paddingBottom}
          max={height / 2}
          unit={""}
          updateValue={update().paddingBottom} />

        <RangeSlider
          label={"Left"}
          inline={true}
          value={paddingLeft}
          max={width / 2}
          unit={""}
          updateValue={update().paddingLeft} />
      </div>

      <br />

      <h4>
        Preset Positions
      </h4>

      <div className="qig__long-buttons-wrapper">
        {positions.map((position, i) =>
          <button key={i} onClick={() => update().position(position)}>
            {position["label"]}
          </button>
        )}
      </div>
    </div>
  )
};

export default Position;
