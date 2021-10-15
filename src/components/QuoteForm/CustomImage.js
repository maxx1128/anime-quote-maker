import React from "react";

const CustomImage = ({ url, updateUrl }) => (
  <div className="qig-l-wrapper__form-item">
    <h4 className="qig-l-wrapper__form-header">
      Set a Custom Image
    </h4>

    <label htmlFor="customUrl">
      Image URL
      <input className="qig-button--right-space" name="customUrl" type="text" value={url} onChange={updateUrl} />
    </label>
    <button onClick={() => { updateUrl('') }}>
      Clear
    </button>
  </div>
);

export default CustomImage;
