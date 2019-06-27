import React from "react";

const QuoteBox = ({quote, image, section, alignment, fontStyle, size, posX, posY, bgColor, textColor, fontFamily, filters}) => {

  let filterList = filters();

  const wrapperStyle = {
     'backgroundImage': `url(${image})`,
     'backgroundPosition': `${posX} ${posY}`,
     'filter': filterList.join(' ')
  };

  const quoteStyle = {
     'textAlign': alignment,
     'fontSize': `${size}px`,
     'fontFamily': fontFamily,
     'backgroundColor': bgColor,
     'color': textColor
  }

  return (
     <div className="qig__image-wrapper">
        <div className="qig__image-bg" style={wrapperStyle}></div>
        <div className={`qig__quote-wrapper qig__quote-wrapper--${section}`}>
           <div className={`qig__quote qig__quote--font-${fontStyle}`} style={quoteStyle}>
              <p>{quote}</p>
           </div>
        </div>
     </div>
   );
}

export default QuoteBox;
