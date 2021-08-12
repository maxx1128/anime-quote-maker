import React from "react";
import RadioItems from "./../RadioItems";

import { alignments, fontStyles, fontFamilies, colorSchemes } from "./../QuoteProps";

const Styling = ({bg, updateBg, text, updateText, alignment, updateAlignment, fontStyle, updateFontStyle, size, updateSize, fontFamily, updateFontFamily, updateColorScheme, randomColorScheme, flipColorScheme}) => (
  <div className="qig-l-wrapper__form-item qig-l-controls__styling">
    <h4 className="qig-l-wrapper__form-header">
      Change the Quote Styling
    </h4>

    <div className="qig-l-radios__wrapper">
      <div className="qig-l-radios__wrapper qig-l-radios__wrapper--spaced-right">
        <input type="color" name="background-color" onChange={updateBg} value={bg} />
          Background Color
      </div>
      <div className="qig-l-radios__wrapper">
        <input type="color" name="text-color" onChange={updateText} value={text} />
        Text Color
      </div>
    </div>

    <br />

    <div className="qig__long-buttons-wrapper">
      <button onClick={() => randomColorScheme()}>
        Random Color Scheme
      </button>

      <button onClick={() => flipColorScheme()}>
        Flip Color Scheme
      </button>
    </div>

    <br />
    <br />

    <div className="qig-l-wrapper__form-multi">
      <div>
        <p className="qig-p--short-label">Text Alignment</p>
        <RadioItems allItems={alignments} selected={alignment} updateSection={updateAlignment} />
      </div>

      <div>
        <p className="qig-p--short-label">Text Styling</p>
        <RadioItems allItems={fontStyles} selected={fontStyle} updateSection={updateFontStyle} />
      </div>
    </div>

    <br />

    <div className="qig-l-wrapper__form-multi">
      <label className="qig-l-slider__label">
        <span>
          Font size: <strong>{size} pixels</strong>
        </span>
        <input type="range" min="10" max="60" name="size" value={size} onChange={updateSize} />
      </label>

      <label>
        Font Family:

        <select value={fontFamily} onChange={updateFontFamily}>
          {fontFamilies.map((fontFamily, i) => <option key={i} value={fontFamily}>{fontFamily}</option>)}
        </select>
      </label>
    </div>

    <br />
    <br />

    <h5 className="qig-l-wrapper__form-subheader">
      Preset Color Palettes
    </h5>

    <div>
      {colorSchemes.map((color, i) => {
        const styles = {
            'backgroundColor': color.values.bgColor,
            'color': color.values.color,
            'fontFamily': color.values.fontFamily
        };

        return (
          <button
              key={i}
              style={styles}
              className="qig-button--right-space"
              onClick={() => updateColorScheme(color.label)}>
            {color.label.toUpperCase()}
          </button>
        )
      })}
    </div>
  </div>
);

export default Styling;
