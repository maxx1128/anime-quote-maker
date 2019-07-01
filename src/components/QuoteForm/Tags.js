import React from "react";

const Tags = ({tags, update, random, refresh}) => (
  <React.Fragment>
    <label>
      Tags:
      <input type="text" name="tags" value={tags} onChange={update} />
    </label>

    <br />
    <br />

    <button className="qig-button--right-space" onClick={() => refresh(tags)}>
      Try Another Image
    </button>

    <button onClick={() => random()}>
      Get a Random Tag
    </button>
  </React.Fragment>
);

export default Tags;
