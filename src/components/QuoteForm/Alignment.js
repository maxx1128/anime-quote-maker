import React from "react";
import RadioItems from "./../RadioItems";

import { posX, posY } from "../QuoteProps";

const Alignment = ({  setPosX, updatePosX,  setPosY, updatePosY }) => (
  <div className="qig-l-wrapper__form-item qig-l-controls__image-pos">
    <h4 className="qig-l-wrapper__form-header">
        Change the Image Alignment
    </h4>
    <p>
        Based on the image's size, one of these alignments won't change the image.
    </p>
    <div className="qig-l-wrapper__form-multi">
        <div>
          <p className="qig-p--short-label">Horizontal</p>
          <RadioItems allItems={posX} selected={setPosX} updateSection={updatePosX} />
        </div>

        <div>
          <p className="qig-p--short-label">Vertical</p>
          <RadioItems allItems={posY} selected={setPosY} updateSection={updatePosY} />
        </div>
    </div>
  </div>
);

export default Alignment;
