import React from "react";

const Size = ({ width, height, updateWidth, updateHeight }) => (
  <div className="qig-l-wrapper__form-item qig-l-controls__size">
    <h4 className="qig-l-wrapper__form-header">
      Change the Quote Size
    </h4>

    <div className="qig-l-wrapper__form-multi">
      <label>
        Width:
        <input type="number" name="width" value={width} onChange={updateWidth} />
      </label>

      <label>
        Height:
        <input type="number" name="height" value={height} onChange={updateHeight} />
      </label>
    </div>
  </div>
);

export default Size;
