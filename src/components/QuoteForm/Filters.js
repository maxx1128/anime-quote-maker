import React from "react";

const Filters = ({ contrast, updateContrast, hueRotate, updateHueRotate, saturate, updateSaturate, brightness, updateBrightness, sepia, updateSepia, blur, updateBlur, invert, updateInvert, fullFilters, updateFullFilter, randomFilters }) => (
  <div className="qig-l-wrapper__form-item">
    <h4 className="qig-l-wrapper__form-header">
      Restyle the Image
    </h4>

    <label htmlFor="filter-contrast" className="qig-l-slider__label">
      <span>
        Contrast: {contrast}%
      </span>
      <input type="range" min="0" max="400" id="filter-contrast" name="filter-contrast" value={contrast} onChange={updateContrast} />
    </label>
    <br />

    <label htmlFor="filter-hue-rotate" className="qig-l-slider__label">
      <span>
        Hue-Rotate: {hueRotate} deg
      </span>
      <input type="range" min="0" max="360" id="filter-hue-rotate" name="filter-hue-rotate" value={hueRotate} onChange={updateHueRotate} />
    </label>
    <br />

    <label htmlFor="filter-saturate" className="qig-l-slider__label">
      <span>
        Saturation: {saturate}%
      </span>
      <input type="range" min="0" max="400" id="filter-saturate" name="filter-saturate" value={saturate} onChange={updateSaturate} />
    </label>
    <br />

    <label htmlFor="filter-brightness" className="qig-l-slider__label">
      <span>
        Brightness: {brightness}%
      </span>
      <input type="range" min="0" max="400" id="filter-brightness" name="filter-brightness" value={brightness} onChange={updateBrightness} />
    </label>
    <br />

    <label htmlFor="filter-sepia" className="qig-l-slider__label">
      <span>
        Sepia: {sepia}%
      </span>
      <input type="range" min="0" max="100" id="filter-sepia" name="filter-sepia" value={sepia} onChange={updateSepia} />
    </label>
    <br />

    <label htmlFor="filter-blur" className="qig-l-slider__label">
      <span>
        Blur: {blur} px
      </span>
      <input type="range" min="0" max="10" id="filter-blur" name="filter-blur" value={blur} step="0.1" onChange={updateBlur} />
    </label>
    <br />

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
