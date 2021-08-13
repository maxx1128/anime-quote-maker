const defaultState = {
  quote: '',
  hash: '123',
  tags: '',
  alignment: 'left',
  size: 20,
  fontStyle: 'base',
  filters: [],
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
  bgColor: '#111111',
  textColor: '#eeeeee',
  fontFamily: 'Open Sans',
  vertical: false,
  width: 700,
  height: 700
}

const tags = ['absurdres', 'scenery', 'tears', 'smile', 'eyes_closed', 'short_hair', 'long_hair', 'hat', 'outdoors', 'day', 'night', 'rain', 'forest', 'building', 'water', 'instrument', 'running', 'heart', 'animal', 'ponytail', 'weapon', '1girl', '1boy', 'game_cg']

const slimPositions = [
   {
      'value': {
         'top': 'auto',
         'right': '0',
         'bottom': '0',
         'left': '0'
      },
      'label': 'Bottom '
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
]

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

const slimFontFamilies = ['Open Sans', 'Archivo Black', 'Abril Fatface', 'Dosis', 'Raleway', 'Space Mono', 'Montserrat', 'Roboto Slab', 'Poppins', 'PT Serif'];

const fontFamilies = [...slimFontFamilies, 'Baumans', 'Gloria Hallelujah', 'Risque'].sort()

const colorSchemes = [
  {
     'label': 'light',
     'values': {
        'bgColor': '#ffffff',
        'color': '#111111',
        'fontFamily': 'Open Sans'
     }
  }, {
     'label': 'dark',
     'values': {
        'bgColor': '#000000',
        'color': '#fffefc',
        'fontFamily': 'Open Sans'
     }
  }, {
      'label': 'fuscia',
      'values': {
         'bgColor': '#F9CAFF',
         'color': '#6D1172',
         'fontFamily': 'PT Serif'
      }
   }, {
      'label': 'orange',
      'values': {
         'bgColor': '#FFAF4D',
         'color': '#001F3F',
         'fontFamily': 'Poppins'
      }
   }, {
      'label': 'teal',
      'values': {
         'bgColor': '#005661',
         'color': '#BBFEE8',
         'fontFamily': 'Montserrat'
      }
   }, {
      'label': 'navy',
      'values': {
         'bgColor': '#001F3F',
         'color': '#FFE747',
         'fontFamily': 'Montserrat'
      }
   }, {
      'label': 'watermelon',
      'values': {
         'bgColor': '#BF1303',
         'color': '#AAF3B3',
         'fontFamily': 'Abril Fatface'
      }
   }, {
      'label': 'silver',
      'values': {
         'bgColor': '#DDDDDD',
         'color': '#575260',
         'fontFamily': 'Roboto Slab'
      }
   }, {
     'label': 'royal',
     'values': {
        'bgColor': '#FFDC00',
        'color': '#85144B',
        'fontFamily': 'Raleway'
     }
  }, {
     'label': 'heavy',
     'values': {
        'bgColor': '#221111',
        'color': '#FF4136',
        'fontFamily': 'Archivo Black'
     }
  }, {
     'label': 'sad',
     'values': {
        'bgColor': '#0074D9',
        'color': '#dddddd',
        'fontFamily': 'Dosis'
     }
  }, {
     'label': 'computer',
     'values': {
        'bgColor': '#332d31',
        'color': '#01FF70',
        'fontFamily': 'Space Mono'
     }
  }
]

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
         "brightness": 105
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
         "contrast": 115,
         "saturate": 60,
         "brightness": 110,
         "sepia": 75,
         "blur": 0.4
      }
   }
]

const fullFilters = [
   ...startingFullFilters,
   {
      "label": "Backdrop",
      "values": {
         ...baseFilterValues,
         "contrast": 75,
         "saturate": 50,
         "brightness": 110,
         "blur": 3
      }
   }
]

export { defaultState, tags, slimPositions, positions, alignments, slimFontStyles, fontStyles, slimFontFamilies, fontFamilies, colorSchemes, startingFullFilters, fullFilters }
