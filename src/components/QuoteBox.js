import React from "react";

function hexToRgb(hex) {
   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
   return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : null;
}

const QuoteBox = ({width, height, quote, author, image, alignment, fontStyle, size, posX, posY, bgColor, textColor, fontFamily, allFilters, allTransforms, boxShadow, boxShadowColor, opacity, borderRadius, paddingTop, paddingRight, paddingBottom, paddingLeft, top, right, bottom, left, perspective, perspectiveOriginX, perspectiveOriginY }) => {

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

   let compiledTransforms = () => {
      const getTransformCSS = (transform) => {
         const nonPixelUnits = {
            'rotate': 'deg',
            'rotateX': 'deg',
            'rotateY': 'deg',
            'skewX': 'deg',
            'skewY': 'deg',
            'scaleX': ' ',
            'scaleY': ' '
         };
         const unit = nonPixelUnits[transform["name"]] || 'px';

         return `${transform["name"]}(${transform["value"]}${unit})`
      }

      return allTransforms().map(transform => getTransformCSS(transform)).join(' ');
   }

  const wrapperStyles = {
   'maxWidth': `${width}px`,
   'maxHeight': `${height}px`,

   'perspective': perspective === 0 ? 'initial' : `${perspective}px`,
   'perspectiveOrigin': `${perspectiveOriginY}% ${perspectiveOriginX}%`
  };

  const imageWrapperStyle = {
     'backgroundImage': `url(${image})`,
     'backgroundPosition': `${posX}% ${posY}%`,
     'filter': compiledFilters()
  };

   const quoteStyle = {
     'top': isNaN(top) ? 'auto' : `${top}px`,
     'right': isNaN(right) ? 'auto' : `${right}px`,
     'bottom': isNaN(bottom) ? 'auto' : `${bottom}px`,
     'left': isNaN(left) ? 'auto' : `${left}px`,

     'boxShadow': `0 4px 8px rgba(${hexToRgb(boxShadowColor)}, ${boxShadow * 0.6}), 0 0 8px rgba(${hexToRgb(boxShadowColor)}, ${boxShadow})`,
     'borderRadius': `${borderRadius}px`,
     'textAlign': alignment,
     'fontSize': `${size}px`,
     'fontFamily': fontFamily,
     'backgroundColor': `rgba(${hexToRgb(bgColor)}, ${opacity})`,
     'color': textColor,

     'transform': compiledTransforms()
   }

   const quoteTextStyle = {
      'padding': `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
   }

   return (
      <div className="qig__image-wrapper" style={wrapperStyles}>
         <div className="qig__image-bg" style={imageWrapperStyle}></div>
         <div className={`qig__quote qig__quote--font-${fontStyle}`} style={quoteStyle}>
            <p className="qig__quote-text" style={quoteTextStyle}>{quote}</p>
            <span className="qig__quote-author">
               {author}
            </span>
         </div>
      </div>
   );
}

export default QuoteBox;
