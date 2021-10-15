export function update(quoteThis) {
  const allUpdates = {
    alignment: (alignment) => quoteThis.setState({ alignment: alignment }),
    shape: (shape) => quoteThis.setState({ shape: shape }),
    shapeSize: (e) => quoteThis.setState({ shapeSize: e.target ? e.target.value : e }),
    shapePosition: (e) => quoteThis.setState({ shapePosition: e.target ? e.target.value : e }),
    customImageUrl: (e) => quoteThis.setState({ customImageUrl: e.target ? e.target.value : e  }),
    posX: (e) => quoteThis.setState({ posX: e.target ? e.target.value : e }),
    posY: (e) => quoteThis.setState({ posY: e.target ? e.target.value : e }),
    quote: (e) => quoteThis.setState({ quote: e.target ? e.target.value : e }),
    bgColor: (e) => quoteThis.setState({ bgColor: e.target ? e.target.value : e }),
    textColor: (e) => quoteThis.setState({ textColor: e.target ? e.target.value : e }),
    style: (style) => quoteThis.setState({ style: style }),
    fontStyle: (fontStyle) => quoteThis.setState({ fontStyle: fontStyle }),
    fontFamily: (e) => quoteThis.setState({ fontFamily: e.target ? e.target.value : e }),
    tags: (newTags) => quoteThis.setState({ tags: newTags }),
    size: (e) => quoteThis.setState({ size: e.target ? e.target.value : e }),
    width: (e) => quoteThis.setState({ width: e.target ? e.target.value : e }),
    height: (e) => quoteThis.setState({ height: e.target ? e.target.value : e }),

    contrast: (e) => quoteThis.setState({ filterContrast: e.target ? e.target.value : e }),
    hueRotate: (e) => quoteThis.setState({ filterHueRotate: e.target ? e.target.value : e }),
    saturate: (e) => quoteThis.setState({ filterSaturate: e.target ? e.target.value : e }),
    brightness: (e) => quoteThis.setState({ filterBrightness: e.target ? e.target.value : e }),
    sepia: (e) => quoteThis.setState({ filterSepia: e.target ? e.target.value : e }),
    blur: (e) => quoteThis.setState({ filterBlur: e.target ? e.target.value : e }),
    invert: (e) => quoteThis.setState({ filterInvert: e.target ? e.target.value : e }),

    quoteTop: (e) => quoteThis.setState({ quoteTop: e.target ? e.target.value : e }),
    quoteRight: (e) => quoteThis.setState({ quoteRight: e.target ? e.target.value : e }),
    quoteBottom: (e) => quoteThis.setState({ quoteBottom: e.target ? e.target.value : e }),
    quoteLeft: (e) => quoteThis.setState({ quoteLeft: e.target ? e.target.value : e }),
    paddingTop: (e) => quoteThis.setState({ paddingTop: e.target ? e.target.value : e }),
    paddingRight: (e) => quoteThis.setState({ paddingRight: e.target ? e.target.value : e }),
    paddingBottom: (e) => quoteThis.setState({ paddingBottom: e.target ? e.target.value : e }),
    paddingLeft: (e) => quoteThis.setState({ paddingLeft: e.target ? e.target.value : e }),

    boxShadow: (e) => quoteThis.setState({ boxShadow: e.target ? e.target.value : e }),
    boxShadowColor: (e) => quoteThis.setState({ boxShadowColor: e.target ? e.target.value : e }),
    borderRadius: (e) => quoteThis.setState({ borderRadius: e.target ? e.target.value : e }),
    opacity: (e) => quoteThis.setState({ opacity: e.target ? e.target.value : e }),

    transformScaleX: (e) => quoteThis.setState({ transformScaleX: e.target ? e.target.value : e }),
    transformScaleY: (e) => quoteThis.setState({ transformScaleY: e.target ? e.target.value : e }),
    transformSkewX: (e) => quoteThis.setState({ transformSkewX: e.target ? e.target.value : e }),
    transformSkewY: (e) => quoteThis.setState({ transformSkewY: e.target ? e.target.value : e }),
    transformTranslateX: (e) => quoteThis.setState({ transformTranslateX: e.target ? e.target.value : e }),
    transformTranslateY: (e) => quoteThis.setState({ transformTranslateY: e.target ? e.target.value : e }),
    transformRotateFull: (e) => quoteThis.setState({ transformRotateFull: e.target ? e.target.value : e }),
    transformRotateX: (e) => quoteThis.setState({ transformRotateX: e.target ? e.target.value : e }),
    transformRotateY: (e) => quoteThis.setState({ transformRotateY: e.target ? e.target.value : e }),

    perspective: (e) => quoteThis.setState({ perspective: e.target ? e.target.value : e }),
    perspectiveOriginX: (e) => quoteThis.setState({ perspectiveOriginX: e.target ? e.target.value : e }),
    perspectiveOriginY: (e) => quoteThis.setState({ perspectiveOriginY: e.target ? e.target.value : e })
  }

  allUpdates.position = (position) => {
    const { value } = position;

    quoteThis.setState({
      quoteTop: value['top'],
      quoteRight: value['right'],
      quoteBottom: value['bottom'],
      quoteLeft: value['left']
    })
  },

  allUpdates.fullFilter = (fullFilter) => {
    const filterVals = fullFilter["values"];
    const setters = {
      "contrast": allUpdates.contrast,
      "hueRotate": allUpdates.hueRotate,
      "saturate": allUpdates.saturate,
      "brightness": allUpdates.brightness,
      "sepia": allUpdates.sepia,
      "blur": allUpdates.blur,
      "invert": allUpdates.invert
    }

    for (let filter in filterVals) {
      const setter = setters[filter];
      setter(filterVals[filter]);
    }
  }

  return allUpdates;
}
