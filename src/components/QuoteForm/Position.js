import React from "react";

const Position = ({quoteTop, quoteRight, quoteBottom, quoteLeft, verticalLimit, horizontalLimit, allPositions, updatePosition, updateQuoteTop, updateQuoteRight, updateQuoteBottom, updateQuoteLeft }) => (
  <div className="qig-l-wrapper__form-item qig-l-controls__position">
    <h4 className="qig-l-wrapper__form-header">
      Change the Quote's Position
    </h4>

    <div className="qig-l-slider__container">
      <div>
        <label htmlFor="posTop" className={`qig-l-slider__label ${isNaN(quoteTop) ? 'qig-l-slider__label--disabled' : ''}`}>
          <span className="qig-l-slider__label-inline-text">
            Top:
            {isNaN(quoteTop)
              ? <strong>None</strong>
              : <input type="number" min="0" max={verticalLimit} value={quoteTop} onChange={updateQuoteTop} />
            }
          </span>
          <input type="range" min="0" max={verticalLimit} name="posTop" value={isNaN(quoteTop) ? 0 : quoteTop} onChange={updateQuoteTop} />
        </label>
        <button onClick={() => updateQuoteTop('auto')}>
          Set to None
        </button>
      </div>

      <div>
        <label htmlFor="posRight" className={`qig-l-slider__label ${isNaN(quoteRight) ? 'qig-l-slider__label--disabled' : ''}`}>
          <span className="qig-l-slider__label-inline-text">
            Right:
            {isNaN(quoteRight)
              ? <strong>None</strong>
              : <input type="number" min="0" max={horizontalLimit} value={quoteRight} onChange={updateQuoteRight} />
            }
          </span>
          <input type="range" min="0" max={horizontalLimit} name="posRight" value={isNaN(quoteRight) ? 0 : quoteRight} onChange={updateQuoteRight} />
        </label>
        <button onClick={() => updateQuoteRight('auto')}>
          Set to None
        </button>
      </div>

      <div>
        <label htmlFor="posBottom" className={`qig-l-slider__label ${isNaN(quoteBottom) ? 'qig-l-slider__label--disabled' : ''}`}>
          <span className="qig-l-slider__label-inline-text">
            Bottom:
            {isNaN(quoteBottom)
              ? <strong>None</strong>
              : <input type="number" min="0" max={verticalLimit} value={quoteBottom} onChange={updateQuoteBottom} />
            }
          </span>
          <input type="range" min="0" max={verticalLimit} name="posBottom" value={isNaN(quoteBottom) ? 0 : quoteBottom} onChange={updateQuoteBottom} />
        </label>
        <button onClick={() => updateQuoteBottom('auto')}>
          Set to None
        </button>
      </div>

      <div>
        <label htmlFor="posLeft" className={`qig-l-slider__label ${isNaN(quoteLeft) ? 'qig-l-slider__label--disabled' : ''}`}>
          <span className="qig-l-slider__label-inline-text">
            Left:
            {isNaN(quoteLeft)
              ? <strong>None</strong>
              : <input type="number" min="0" max={horizontalLimit} value={quoteLeft} onChange={updateQuoteLeft} />
            }
          </span>
          <input type="range" min="0" max={horizontalLimit} name="posLeft" value={isNaN(quoteLeft) ? 0 : quoteLeft} onChange={updateQuoteLeft} />
        </label>
        <button onClick={() => updateQuoteLeft('auto')}>
          Set to None
        </button>
      </div>
    </div>

    <br />

    <h4>
      Preset Positions
    </h4>

    <div className="qig__long-buttons-wrapper">
      {allPositions.map((position, i) =>
        <button key={i} onClick={() => updatePosition(position)}>
          {position["label"]}
        </button>
      )}
    </div>
  </div>
);

export default Position;
