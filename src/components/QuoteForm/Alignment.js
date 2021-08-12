import React from "react";

const Alignment = ({  setPosX, updatePosX,  setPosY, updatePosY }) => (
  <div className="qig-l-wrapper__form-item qig-l-controls__image-pos">
    <h4 className="qig-l-wrapper__form-header">
        Change the Image Alignment
    </h4>
    <p>
        Both inputs represent the <strong>percentage position</strong> for horizontal and vertical alignment. Based on the image's size, one of these alignments won't change the image.
    </p>
    <div className="qig-l-slider__container">
        <label className="qig-l-slider__label">
          <span>
            Horizontal: <strong>{setPosX}%</strong>
          </span>
          <input type="range" min="0" max="100" name="posX" value={setPosX} onChange={updatePosX} />
        </label>

        <label className="qig-l-slider__label">
          <span>
            Vertical: <strong>{setPosY}%</strong>
          </span>
          <input type="range" min="0" max="100" name="posY" value={setPosY} onChange={updatePosY} />
        </label>
    </div>
  </div>
);

export default Alignment;
