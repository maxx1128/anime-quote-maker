import React from "react";

const QuoteBox = ({width, height, quote, author, image, alignment, fontStyle, size, posX, posY, bgColor, textColor, fontFamily, filters, top, right, bottom, left}) => {

  let filterList = filters();

  const wrapperSizes = {
   'maxWidth': `${width}px`,
   'maxHeight': `${height}px`
  };

  const wrapperStyle = {
     'backgroundImage': `url(${image})`,
     'backgroundPosition': `${posX}% ${posY}%`,
     'filter': filterList.join(' ')
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
