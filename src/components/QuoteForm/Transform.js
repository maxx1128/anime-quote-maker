import React from "react";

const Transform = ({ verticalLimit, horizontalLimit, boxShadow, updateBoxShadow, borderRadius, updateBorderRadius, opacity, updateOpacity, scaleX, updateScaleX, scaleY, updateScaleY, skewX, updateSkewX, skewY, updateSkewY, translateX, updateTranslateX, translateY, updateTranslateY, rotateFull, updateRotateFull, resetTransforms }) => (
  <div className="qig-l-wrapper__form-item">
    <h4 className="qig-l-wrapper__form-header">
      Transform the Quote
    </h4>

    <label htmlFor="opacity" className="qig-l-slider__label">
      <span>
        Opacity: <input type="number" min="0" max="1" value={opacity} step="0.025" onChange={updateOpacity} />
      </span>
      <input type="range" min="0" max="1" id="opacity" name="opacity" value={opacity} step="0.025" onChange={updateOpacity} />
    </label>
    <br />

    <label htmlFor="box-shadow" className="qig-l-slider__label">
      <span>
        Box Shadow: <input type="number" min="0" max="1" value={boxShadow} step="0.025" onChange={updateBoxShadow} />
      </span>
      <input type="range" min="0" max="1" id="box-shadow" name="box-shadow" value={boxShadow} step="0.025" onChange={updateBoxShadow} />
    </label>
    <br />

    <label htmlFor="border-radius" className="qig-l-slider__label">
      <span>
        Border Radius: <input type="number" min="0" max="150" value={borderRadius} step="1" onChange={updateBorderRadius} /> px
      </span>
      <input type="range" min="0" max="150" id="border-radius" name="border-radius" value={borderRadius} step="1" onChange={updateBorderRadius} />
    </label>
    <br />

    <label htmlFor="transform-scale-x" className="qig-l-slider__label">
      <span>
        Scale X: <input type="number" min="0" max="5" value={scaleX} step="0.05" onChange={updateScaleX} />
      </span>
      <input type="range" min="0" max="5" id="transform-scale-x" name="transform-scale-x" value={scaleX} step="0.05" onChange={updateScaleX} />
    </label>
    <br />

    <label htmlFor="transform-scale-y" className="qig-l-slider__label">
      <span>
        Scale Y: <input type="number" min="0" max="5" value={scaleY} step="0.05" onChange={updateScaleY} />
      </span>
      <input type="range" min="0" max="5" id="transform-scale-y" name="transform-scale-y" value={scaleY} step="0.05" onChange={updateScaleY} />
    </label>
    <br />

    <label htmlFor="transform-skew-x" className="qig-l-slider__label">
      <span>
        Skew X: <input type="number" min="-90" max="90" value={skewX} step="1" onChange={updateSkewX} /> deg
      </span>
      <input type="range" min="-90" max="90" id="transform-skew-x" name="transform-skew-x" value={skewX} step="1" onChange={updateSkewX} />
    </label>
    <br />

    <label htmlFor="transform-skew-y" className="qig-l-slider__label">
      <span>
        Skew Y: <input type="number" min="-90" max="90" value={skewY} step="1" onChange={updateSkewY} /> deg
      </span>
      <input type="range" min="-90" max="90" id="transform-skew-y" name="transform-skew-y" value={skewY} step="1" onChange={updateSkewY} />
    </label>
    <br />

    <label htmlFor="transform-translate-x" className="qig-l-slider__label">
      <span>
        Translate X: <input type="number" min={horizontalLimit * -1} max={horizontalLimit} value={translateX} step="1" onChange={updateTranslateX} /> px
      </span>
      <input type="range" min={horizontalLimit * -1} max={horizontalLimit} id="transform-translate-x" name="transform-translate-x" value={translateX} step="1" onChange={updateTranslateX} />
    </label>
    <br />

    <label htmlFor="transform-translate-y" className="qig-l-slider__label">
      <span>
        Translate Y: <input type="number" min={verticalLimit * -1} max={verticalLimit} value={translateY} step="1" onChange={updateTranslateY} /> px
      </span>
      <input type="range" min={verticalLimit * -1} max={verticalLimit} id="transform-translate-y" name="transform-translate-y" value={translateY} step="1" onChange={updateTranslateY} />
    </label>
    <br />

    <label htmlFor="transform-rotate" className="qig-l-slider__label">
      <span>
        Rotate (Full): <input type="number" min="0" max="360" value={rotateFull} step="1" onChange={updateRotateFull} /> deg
      </span>
      <input type="range" min="0" max="360" id="transform-rotate" name="transform-rotate" value={rotateFull} step="0.05" onChange={updateRotateFull} />
    </label>
    <br />

    <button onClick={() => resetTransforms()}>
      Reset Transforms
    </button>
  </div>
);

export default Transform;
