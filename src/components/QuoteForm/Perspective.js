import React from "react";

const Perspective = ({ rotateX, updateRotateX, rotateY, updateRotateY, perspective, updatePerspective, perspectiveOriginX, updatePerspectiveOriginX, perspectiveOriginY, updatePerspectiveOriginY, resetPerspective }) => (
  <div className="qig-l-wrapper__form-item">
    <h4 className="qig-l-wrapper__form-header">
      Add some Perspective
    </h4>

    <label htmlFor="perspective" className="qig-l-slider__label">
      <span>
        Perspective: <input type="number" min="0" max="1500" value={perspective} step="1" onChange={updatePerspective} />

        <button onClick={() => updatePerspective(0)}>
          Set to None
        </button>
      </span>
      <input type="range" min="0" max="1500" id="perspective" name="perspective" value={perspective} step="1" onChange={updatePerspective} />
    </label>
    <br />

    <label htmlFor="perspective-origin-x" className="qig-l-slider__label">
      <span>
        Perspective Origin (X): <input type="number" min="0" max="100" value={perspectiveOriginX} step="0.5" onChange={updatePerspectiveOriginX} />%
      </span>
      <input type="range" min="0" max="100" id="perspective-origin-x" name="perspective-origin-x" value={perspectiveOriginX} step="0.5" onChange={updatePerspectiveOriginX} />
    </label>
    <br />

    <label htmlFor="perspective-origin-y" className="qig-l-slider__label">
      <span>
        Perspective Origin (Y): <input type="number" min="0" max="100" value={perspectiveOriginY} step="0.5" onChange={updatePerspectiveOriginY} />%
      </span>
      <input type="range" min="0" max="100" id="perspective-origin-y" name="perspective-origin-y" value={perspectiveOriginY} step="0.5" onChange={updatePerspectiveOriginY} />
    </label>
    <br />

    <label htmlFor="rotate-x" className="qig-l-slider__label">
      <span>
        Rotate (X): <input type="number" min="0" max="360" value={rotateX} step="1" onChange={updateRotateX} />
      </span>
      <input type="range" min="0" max="360" id="rotate-x" name="rotate-x" value={rotateX} step="1" onChange={updateRotateX} />
    </label>
    <br />

    <label htmlFor="rotate-y" className="qig-l-slider__label">
      <span>
        Rotate (Y): <input type="number" min="0" max="360" value={rotateY} step="1" onChange={updateRotateY} />
      </span>
      <input type="range" min="0" max="360" id="rotate-y" name="rotate-y" value={rotateY} step="1" onChange={updateRotateY} />
    </label>
    <br />
    <button onClick={() => resetPerspective()}>
      Reset Perspective
    </button>
  </div>
);

export default Perspective;
