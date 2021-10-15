import React from "react";
import RangeSlider from "./../RangeSlider";

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

const Position = ({quoteTop, quoteRight, quoteBottom, quoteLeft, verticalLimit, horizontalLimit, allPositions, paddingTop, updatePaddingTop, paddingRight, updatePaddingRight, paddingBottom, updatePaddingBottom, paddingLeft, updatePaddingLeft, updatePosition, updateQuoteTop, updateQuoteRight, updateQuoteBottom, updateQuoteLeft }) => (
  <div className="qig-l-wrapper__form-item qig-l-controls__position">
    <h4 className="qig-l-wrapper__form-header">
      Change the Quote's Position
    </h4>

    <div className="qig-l-slider__container">
      <LocationSlider
        label={"Top"}
        value={quoteTop}
        updateValue={updateQuoteTop}
        limit={verticalLimit} />

      <LocationSlider
        label={"Right"}
        value={quoteRight}
        updateValue={updateQuoteRight}
        limit={horizontalLimit} />

      <LocationSlider
        label={"Bottom"}
        value={quoteBottom}
        updateValue={updateQuoteBottom}
        limit={verticalLimit} />

      <LocationSlider
        label={"Left"}
        value={quoteLeft}
        updateValue={updateQuoteLeft}
        limit={horizontalLimit} />
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
        max={verticalLimit / 2}
        unit={""}
        updateValue={updatePaddingTop} />

      <RangeSlider
        label={"Right"}
        inline={true}
        value={paddingRight}
        max={horizontalLimit / 2}
        unit={""}
        updateValue={updatePaddingRight} />

      <RangeSlider
        label={"Bottom"}
        inline={true}
        value={paddingBottom}
        max={verticalLimit / 2}
        unit={""}
        updateValue={updatePaddingBottom} />

      <RangeSlider
        label={"Left"}
        inline={true}
        value={paddingLeft}
        max={horizontalLimit / 2}
        unit={""}
        updateValue={updatePaddingLeft} />
    </div>

    <br />

    <h4>
      Preset Positions
    </h4>

    <div className="qig__long-buttons-wrapper">
      {allPositions.map((position, i) =>
        <button key={i} onClick={() => updatePosition(position)}>
          {position["label"]}
        </button>
      )}
    </div>
  </div>
);

export default Position;
