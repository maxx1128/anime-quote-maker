const defaultState = {
  customImageUrl: '',
  quote: '',
  hash: '123',
  tags: 'highres',
  alignment: 'left',
  size: 20,
  fontStyle: 'base',
  shape: 'none',
  shapeSize: 20,
  shapePosition: 50,
  filterContrast: 100,
  filterHueRotate: 0,
  filterSaturate: 100,
  filterBrightness: 100,
  filterSepia: 0,
  filterBlur: 0,
  filterInvert: 0,
  posX: 50,
  posY: 0,
  quoteTop: 'auto',
  quoteRight: 0,
  quoteBottom: 0,
  quoteLeft: 0,
  paddingTop: 20,
  paddingRight: 20,
  paddingBottom: 20,
  paddingLeft: 20,
  boxShadow: .2,
  boxShadowColor: '#000000',
  opacity: 0.925,
  borderRadius: 0,
  transformScaleX: 1,
  transformScaleY: 1,
  transformSkewX: 0,
  transformSkewY: 0,
  transformTranslateX: 0,
  transformTranslateY: 0,
  transformRotateFull: 0,
  transformRotateX: 0,
  transformRotateY: 0,
  perspective: 0,
  perspectiveOriginX: 0,
  perspectiveOriginY: 0,
  bgColor: '#111111',
  textColor: '#eeeeee',
  fontFamily: 'Open Sans',
  vertical: false,
  width: 700,
  height: 700
}

const tags = ['absurdres', 'scenery', 'tears', 'smile', 'eyes_closed', 'short_hair', 'long_hair', 'hat', 'outdoors', 'day', 'night', 'rain', 'forest', 'building', 'water', 'instrument', 'running', 'heart', 'animal', 'ponytail', 'weapon', '1girl', '1boy', 'game_cg', 'highres'];

const slimPositions = [
   {
      'value': {
         'top': 'auto',
         'right': '0',
         'bottom': '0',
         'left': '0'
      },
      'label': 'Bottom'
   }, {
      'value': {
         'top': 'auto',
         'right': '35',
         'bottom': '35',
         'left': '35'
      },
      'label': 'Spaced Bottom'
   }, {
      'value': {
         'top': 'auto',
         'right': '0',
         'bottom': '125',
         'left': '0'
      },
      'label': '3/4'
   }
]

const positions = [
   ...slimPositions,
    {
      'value': {
         'top': 'auto',
         'right': '0',
         'bottom': '250',
         'left': '0'
      },
      'label': 'Middle'
   }, {
      'value': {
         'top': 'auto',
         'right': '35',
         'bottom': '250',
         'left': '35'
      },
      'label': 'Spaced Middle'
   }, {
      'value': {
         'top': '125',
         'right': '0',
         'bottom': 'auto',
         'left': '0'
      },
      'label': '1/4'
   }, {
      'value': {
         'top': '0',
         'right': '0',
         'bottom': 'auto',
         'left': '0'
      },
      'label': 'Top'
   }, {
      'value': {
         'top': '35',
         'right': '35',
         'bottom': 'auto',
         'left': '35'
      },
      'label': 'Spaced Top'
   }, {
      'value': {
         'top': '0',
         'right': '400',
         'bottom': '0',
         'left': '0'
      },
      'label': 'Left'
   }, {
      'value': {
         'top': '35',
         'right': '350',
         'bottom': '35',
         'left': '35'
      },
      'label': 'Spaced Left'
   }, {
      'value': {
         'top': '0',
         'right': '0',
         'bottom': '0',
         'left': '400'
      },
      'label': 'Right'
   }, {
      'value': {
         'top': '35',
         'right': '35',
         'bottom': '35',
         'left': '350'
      },
      'label': 'Spaced Right'
   }, {
      'value': {
         'top': '0',
         'right': '400',
         'bottom': 'auto',
         'left': '0'
      },
      'label': 'Top Left'
   }, {
      'value': {
         'top': '0',
         'right': '0',
         'bottom': 'auto',
         'left': '400'
      },
      'label': 'Top Right'
   }, {
      'value': {
         'top': 'auto',
         'right': '400',
         'bottom': '0',
         'left': '0'
      },
      'label': 'Bottom Left'
   }, {
      'value': {
         'top': 'auto',
         'right': '0',
         'bottom': '0',
         'left': '400'
      },
      'label': 'Bottom Right'
   }
].sort((a, b) => a.label > b.label && 1 || -1)

const verticalShapes = [
   {
      'value': 'diamond-top',
      'label': 'Diamond Top'
   }, {
      'value': 'diamond-bottom',
      'label': 'Diamond Bottom'
   }, {
      'value': 'diamond-vertical',
      'label': 'Diamond Vertical'
   }, {
      'value': 'ribbon-top',
      'label': 'Ribbon Top'
   }, {
      'value': 'ribbon-bottom',
      'label': 'Ribbon Bottom'
   }, {
      'value': 'ribbon-vertical',
      'label': 'Ribbon Vertical'
   }
]

const slimShapes = [
   {
      'value': 'diamond-right',
      'label': 'Diamond Right'
   }, {
      'value': 'diamond-left',
      'label': 'Diamond Left'
   }, {
      'value': 'diamond-horizontal',
      'label': 'Diamond Horizontal'
   }, {
      'value': 'ribbon-right',
      'label': 'Ribbon Right'
   }, {
      'value': 'ribbon-left',
      'label': 'Ribbon Left'
   }, {
      'value': 'ribbon-horizontal',
      'label': 'Ribbon Horizontal'
   }
];

const shapes = [
   {
      'value': 'none',
      'label': 'None'
   },
   ...slimShapes,
   ...verticalShapes,
   {
      'value': 'triangle-top',
      'label': 'Triangle Top'
   }, {
      'value': 'triangle-right',
      'label': 'Triangle Right'
   }, {
      'value': 'triangle-bottom',
      'label': 'Triangle Bottom'
   }, {
      'value': 'triangle-left',
      'label': 'Triangle Left'
   }, {
      'value': 'diamond-full',
      'label': 'Diamond Full'
   }
].sort((a, b) => a.label > b.label && 1 || -1)

const alignments = [
  {
     'value': 'left',
     'label': 'Left'
  }, {
     'value': 'center',
     'label': 'Center'
  }, {
     'value': 'right',
     'label': 'Right'
  }
]

const slimFontStyles = [
  {
     'value': 'base',
     'label': 'Base'
  }, {
     'value': 'italic',
     'label': 'Italic'
  }
]

const fontStyles = [
   ...slimFontStyles,
   {
      'value': 'bold',
      'label': 'Bold'
   }
]

const slimFontFamilies = ['Archivo Black', 'Abril Fatface', 'Futura', 'Dosis', 'Raleway', 'Space Mono', 'Montserrat', 'Roboto Slab', 'Indie Flower', 'Cormorant Garamond', 'Merienda', 'DM Serif Display', 'Special Elite', 'Unna', 'Philosopher', 'Economica', 'Carter One', 'Amita', 'Lucida Grande', "Josefin Slab"];

const fontFamilies = [...slimFontFamilies, 'Baumans', 'Risque', 'Satisfy', 'Dancing Script', 'MedievalSharp', 'Aclonica'].sort()

const baseFilterValues = {
   "contrast": 100,
   "hueRotate": 0,
   "saturate": 100,
   "brightness": 100,
   "sepia": 0,
   "blur": 0,
   "invert": 0
}

const startingFullFilters = [
   {
      "label": "None",
      "values": {
         ...baseFilterValues
      }
   }, {
      "label": "Soft Light",
      "values": {
         ...baseFilterValues,
         "contrast": 115,
         "saturate": 150,
         "brightness": 105,
         "blur": 0.3
      }
   }, {
      "label": "Hard Light",
      "values": {
         ...baseFilterValues,
         "contrast": 140,
         "hueRotate": 340,
         "saturate": 45,
         "brightness": 115
      }
   }, {
      "label": "LoFi",
      "values": {
         ...baseFilterValues,
         "hueRotate": 15,
         "contrast": 150,
         "saturate": 110,
         "brightness": 110
      }
   }, {
      "label": "Old Photo",
      "values": {
         ...baseFilterValues,
         "contrast": 150,
         "saturate": 10,
         "brightness": 85,
         "sepia": 5
      }
   }, {
      "label": "Rustic",
      "values": {
         ...baseFilterValues,
         "contrast": 75,
         "saturate": 375,
         "brightness": 105,
         "sepia": 50
      }
   }, {
      "label": "Trippy",
      "values": {
         ...baseFilterValues,
         "contrast": 135,
         "hueRotate": 180,
         "saturate": 150,
         "brightness": 125
      }
   }, {
      "label": "Nightmare",
      "values": {
         ...baseFilterValues,
         "contrast": 120,
         "hueRotate": 135,
         "saturate": 80,
         "brightness": 90,
         "invert": 100
      }
   }, {
      "label": "Fond Memory",
      "values": {
         ...baseFilterValues,
         "contrast": 60,
         "saturate": 60,
         "brightness": 110,
         "sepia": 75,
         "blur": 0.8
      }
   }
]

const fullFilters = [
   ...startingFullFilters,
   {
      "label": "Backdrop",
      "values": {
         ...baseFilterValues,
         "contrast": 70,
         "saturate": 50,
         "brightness": 120,
         "blur": 3
      }
   }
]

export { defaultState, tags, slimPositions, positions, alignments, slimShapes, verticalShapes, shapes, slimFontStyles, fontStyles, slimFontFamilies, fontFamilies, startingFullFilters, fullFilters }
