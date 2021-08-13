import React from "react";

const QuoteBox = ({width, height, quote, author, image, alignment, fontStyle, size, posX, posY, bgColor, textColor, fontFamily, allFilters, top, right, bottom, left}) => {

   let compiledFilters = () => {
      const getFilterCSS = (filter) => {
         const nonPercentUnits = {
            'hue-rotate': 'deg',
            'blur': 'px'
         };
         const unit = nonPercentUnits[filter["name"]] || '%';

         return `${filter["name"]}(${filter["value"]}${unit})`
      }

      return allFilters().map(filter => getFilterCSS(filter)).join(' ');
   }

  const wrapperSizes = {
   'maxWidth': `${width}px`,
   'maxHeight': `${height}px`
  };

  const wrapperStyle = {
     'backgroundImage': `url(${image})`,
     'backgroundPosition': `${posX}% ${posY}%`,
     'filter': compiledFilters()
  };

   const quoteStyle = {
     'top': isNaN(top) ? 'auto' : `${top}px`,
     'right': isNaN(right) ? 'auto' : `${right}px`,
     'bottom': isNaN(bottom) ? 'auto' : `${bottom}px`,
     'left': isNaN(left) ? 'auto' : `${left}px`,

     'textAlign': alignment,
     'fontSize': `${size}px`,
     'fontFamily': fontFamily,
     'backgroundColor': bgColor,
     'color': textColor
   }

   return (
      <div className="qig__image-wrapper" style={wrapperSizes}>
         <div className="qig__image-bg" style={wrapperStyle}></div>
         <div className={`qig__quote qig__quote--font-${fontStyle}`} style={quoteStyle}>
            <p>{quote}</p>
            <span className="qig__quote-author">
               {author}
            </span>
         </div>
      </div>
   );
}

export default QuoteBox;
