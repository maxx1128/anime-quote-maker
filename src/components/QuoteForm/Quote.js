import React from "react";

const Quote = ({quote, update, getQuote}) => (
  <div className="qig-l-wrapper__form-item qig-l-controls__quote">
    <h4 className="qig-l-wrapper__form-header">
      Change the Quote's Content
    </h4>
    <label>
      <textarea rows="3" value={quote} onChange={update} />
    </label>

    <button onClick={() => getQuote()}>
        Get a Random Quote
    </button>
  </div>
);

export default Quote;
