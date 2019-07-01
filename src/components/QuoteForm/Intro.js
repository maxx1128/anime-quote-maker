import React from "react";

const Intro = () => (
  <React.Fragment>
    <h2>
      Make An Anime Quote Image!
    </h2>

    <h4 className="qig-l-wrapper__form-header">
      Change the Image Tags
    </h4>
    <p>
      Each tag should be <strong>comma-separated without spaces</strong>. Tags with multiple words should <strong>replace spaces with underscores.</strong> There's lots of potential tags, so try locations, items, characters, types of clothing, games, and more!
    </p>
    <p>
      Can't decide? Leave it blank for something totally random!
    </p>
  </React.Fragment>
);

export default Intro;
