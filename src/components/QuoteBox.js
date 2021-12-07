import React from "react";

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : null;
}

const QuoteBox = ({ get, state }) => {
  const { image, filters, transforms } = get;
  const {
    width,
    height,
    circular,
    shape,
    shapeSize,
    shapePosition,
    quote,
    author,
    alignment,
    fontStyle,
    size,
    posX,
    posY,
    bgColor,
    textColor,
    fontFamily,
    boxShadow,
    boxShadowColor,
    opacity,
    bannerStyle,
    borderRadius,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    quoteTop,
    quoteRight,
    quoteBottom,
    quoteLeft,
    perspective,
    perspectiveOriginX,
    perspectiveOriginY,
  } = state;

  let shapeClipPath = () => {
    if (bannerStyle !== "solid") {
      return "initial";
    }

    switch (shape) {
      case "diamond-top":
        return `polygon(0 ${shapeSize}px, 0 100%, 100% 100%, 100% ${shapeSize}px, ${shapePosition}% 0)`;
      case "diamond-right":
        return `polygon(0 0, 0 100%, calc(100% - ${shapeSize}px) 100%, 100% ${shapePosition}%, calc(100% - ${shapeSize}px) 0)`;
      case "diamond-bottom":
        return `polygon(0 0, 0 calc(100% - ${shapeSize}px), ${shapePosition}% 100%, 100% calc(100% - ${shapeSize}px), 100% 0)`;
      case "diamond-left":
        return `polygon(${shapeSize}px 0, 0 ${shapePosition}%, ${shapeSize}px 100%, 100% 100%, 100% 0)`;
      case "diamond-vertical":
        return `polygon(0 ${shapeSize}px, 0 calc(100% - ${shapeSize}px), ${shapePosition}% 100%, 100% calc(100% - ${shapeSize}px), 100% ${shapeSize}px, ${shapePosition}% 0)`;
      case "diamond-horizontal":
        return `polygon(${shapeSize}px 0, 0 ${shapePosition}%, ${shapeSize}px 100%, calc(100% - ${shapeSize}px) 100%, 100% ${shapePosition}%, calc(100% - ${shapeSize}px) 0)`;
      case "diamond-full":
        return `polygon(${shapePosition}% 0, 0 ${shapePosition}%, ${shapePosition}% 100%, 100% ${shapePosition}%)`;
      case "ribbon-top":
        return `polygon(0 0, ${shapePosition}% ${shapeSize}px, 100% 0, 100% 100%, 0 100%)`;
      case "ribbon-right":
        return `polygon(0 0, 100% 0, calc(100% - ${shapeSize}px) ${shapePosition}%, 100% 100%, 0 100%)`;
      case "ribbon-bottom":
        return `polygon(0 0, 100% 0, 100% 100%, ${shapePosition}% calc(100% - ${shapeSize}px), 0 100%)`;
      case "ribbon-left":
        return `polygon(0 0, 100% 0, 100% 100%, 0 100%, ${shapeSize}px ${shapePosition}%)`;
      case "ribbon-vertical":
        return `polygon(0 0, ${shapePosition}% ${shapeSize}px, 100% 0, 100% 100%, ${shapePosition}% calc(100% - ${shapeSize}px), 0 100%)`;
      case "ribbon-horizontal":
        return `polygon(0 0, 100% 0, calc(100% - ${shapeSize}px) ${shapePosition}%, 100% 100%, 0 100%, ${shapeSize}px ${shapePosition}%)`;
      case "triangle-top":
        return `polygon(0 100%, ${shapePosition}% 0, 100% 100%)`;
      case "triangle-right":
        return `polygon(0 0, 100% ${shapePosition}%, 0 100%)`;
      case "triangle-bottom":
        return `polygon(0 0, ${shapePosition}% 100%, 100% 0)`;
      case "triangle-left":
        return `polygon(100% 0, 100% 100%, 0 ${shapePosition}%)`;
      default:
        return null;
    }
  };

  let shapePadding = () => {
    switch (shape) {
      case "diamond-top":
        return `${shapeSize}px 0 0 0`;
      case "diamond-right":
        return `0 ${shapeSize}px 0 0`;
      case "diamond-bottom":
        return `0 0 ${shapeSize}px 0`;
      case "diamond-left":
        return `0 0 0 ${shapeSize}px`;
      case "diamond-vertical":
        return `${shapeSize}px 0 ${shapeSize}px 0`;
      case "diamond-horizontal":
        return `0 ${shapeSize}px 0 ${shapeSize}px`;
      case "diamond-full":
        return `${shapeSize}px`;
      case "ribbon-top":
        return `${shapeSize}px 0 0 0`;
      case "ribbon-right":
        return `0 ${shapeSize}px 0 0`;
      case "ribbon-bottom":
        return `0 0 ${shapeSize}px 0`;
      case "ribbon-left":
        return `0 0 0 ${shapeSize}px`;
      case "ribbon-vertical":
        return `${shapeSize}px 0 ${shapeSize}px 0`;
      case "ribbon-horizontal":
        return `0 ${shapeSize}px 0 ${shapeSize}px`;
      case "triangle-top":
        return `${shapeSize}px ${(100 - shapePosition) / 3}% 0 ${
          shapePosition / 3
        }%`;
      case "triangle-right":
        return `${shapePosition / 3}% ${shapeSize}px ${
          (100 - shapePosition) / 3
        }% 0`;
      case "triangle-bottom":
        return `0 ${(100 - shapePosition) / 3}% ${shapeSize}px ${
          shapePosition / 3
        }%`;
      case "triangle-left":
        return `${shapePosition / 3}% 0 ${
          (100 - shapePosition) / 3
        }% ${shapeSize}px`;
      default:
        return "0 0 0 0";
    }
  };

  let compiledFilters = () => {
    const getFilterCSS = (filter) => {
      const nonPercentUnits = {
        "hue-rotate": "deg",
        blur: "px",
      };
      const unit = nonPercentUnits[filter["name"]] || "%";

      return `${filter["name"]}(${filter["value"]}${unit})`;
    };

    return filters()
      .map((filter) => getFilterCSS(filter))
      .join(" ");
  };

  let compiledTransforms = () => {
    const getTransformCSS = (transform) => {
      const nonPixelUnits = {
        rotate: "deg",
        rotateX: "deg",
        rotateY: "deg",
        skewX: "deg",
        skewY: "deg",
        scaleX: " ",
        scaleY: " ",
      };
      const unit = nonPixelUnits[transform["name"]] || "px";

      return `${transform["name"]}(${transform["value"]}${unit})`;
    };

    return transforms()
      .map((transform) => getTransformCSS(transform))
      .join(" ");
  };

  const wrapperStyles = {
    maxWidth: `${width}px`,
    maxHeight: `${height}px`,
    borderRadius: circular ? "100%" : 0,

    perspective: perspective === 0 ? "initial" : `${perspective}px`,
    perspectiveOrigin: `${perspectiveOriginY}% ${perspectiveOriginX}%`,
  };

  const imageWrapperStyle = {
    backgroundImage: `url(${image()})`,
    backgroundPosition: `${posX}% ${posY}%`,
    filter: compiledFilters(),
  };

  const quoteStyle = {
    top: isNaN(quoteTop) ? "auto" : `${quoteTop}px`,
    right: isNaN(quoteRight) ? "auto" : `${quoteRight}px`,
    bottom: isNaN(quoteBottom) ? "auto" : `${quoteBottom}px`,
    left: isNaN(quoteLeft) ? "auto" : `${quoteLeft}px`,

    padding: shapePadding(),

    boxShadow:
      bannerStyle === "solid"
        ? `0 4px 8px rgba(${hexToRgb(boxShadowColor)}, ${boxShadow * 0.6}`
        : "inherit",
    borderRadius: `${borderRadius}px`,
    textAlign: alignment,
    fontSize: `${size}px`,
    fontFamily: fontFamily,
    backgroundColor:
      bannerStyle === "solid"
        ? `rgba(${hexToRgb(bgColor)}, ${opacity})`
        : "inherit",
    color: textColor,

    transform: compiledTransforms(),
    clipPath: shapeClipPath(),
  };

  const quoteTextStyle = {
    padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
  };

  const quoteTextDuplicateStyleNthOf = (number) => {
    const multiplier = Math.floor(8 % number) + 1,
      moveBy = 2 * multiplier;
    let top = paddingTop,
      right = paddingRight,
      bottom = paddingBottom,
      left = paddingLeft;

    if (isNaN(top) || isNaN(right) || isNaN(bottom) || isNaN(left)) {
      return {
        display: "none",
      };
    }

    switch (number % 8) {
      case 1:
        top -= moveBy;
        break;
      case 2:
        top -= moveBy;
        right -= moveBy;
        break;
      case 3:
        right -= moveBy;
        break;
      case 4:
        right -= moveBy;
        bottom -= moveBy;
        break;
      case 5:
        bottom -= moveBy;
        break;
      case 6:
        bottom -= moveBy;
        left -= moveBy;
        break;
      case 7:
        left -= moveBy;
        break;
      case 0:
        left -= moveBy;
        top -= moveBy;
        break;
      default:
        break;
    }

    return {
      inset: `${top}px ${right}px ${bottom}px ${left}px`,
      display: bannerStyle === "outline" ? "inherit" : "none",
      color: bgColor,
    };
  };

  return (
    <div className="qig__image-wrapper" style={wrapperStyles}>
      <div className="qig__image-bg" style={imageWrapperStyle}></div>
      <div
        className={`qig__quote qig__quote--font-${fontStyle}`}
        style={quoteStyle}
      >
        <p className="qig__quote-text" style={quoteTextStyle}>
          {quote}

          {bannerStyle === "outline" &&
            [...Array(8 * 5)].map((el, i) => (
              <span
                key={i}
                className="qig__quote-text qig__quote-text--duplicate"
                style={quoteTextDuplicateStyleNthOf(i)}
              >
                {quote}
              </span>
            ))}
        </p>

        <span className="qig__quote-author">{author}</span>
      </div>
    </div>
  );
};

export default QuoteBox;
