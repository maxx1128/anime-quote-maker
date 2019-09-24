const defaultState = {
  quote: '',
  hash: '123',
  tags: '',
  section: 'top-row',
  alignment: 'left',
  size: 20,
  fontStyle: 'base',
  filters: [],
  posX: 50,
  posY: 50,
  bgColor: '#111111',
  textColor: '#eeeeee',
  fontFamily: 'Open Sans',
  vertical: false,
  width: 700,
  height: 700
}

const tags = ['absurdres', 'scenery', 'library', 'city', 'space', 'thinking', 'sad', 'happy', 'forest', 'military', 'city', 'singing', 'running', 'heart', 'pokemon', 'animal', 'ponytail', 'jacket', 'goggles', 'weapon', 'skateboard']

const slimSections = [
   {
      'value': 'center-top',
      'label': 'Center Top'
   }, {
      'value': 'center-bottom',
      'label': 'Center Bottom'
   }, {
      'value': 'top-row',
      'label': 'Top Row'
   }, {
      'value': '1-4-row',
      'label': '1/4 Row'
   }, {
      'value': 'middle-row',
      'label': 'Middle Row'
   }, {
      'value': '3-4-row',
      'label': '3/4 Row'
   }, {
      'value': 'bottom-row',
      'label': 'Bottom Row'
   },
 ]

const sections = [...slimSections,
   {
      'value': 'bottom-left',
      'label': 'Bottom Left'
   }, {
      'value': 'bottom-right',
      'label': 'Bottom Right'
   }, {
      'value': 'top-left',
      'label': 'Top Left'
   }, {
      'value': 'top-right',
      'label': 'Top Right'
   }, {
      'value': 'left-column',
      'label': 'Left Column'
   }, {
      'value': 'right-column',
      'label': 'Right Column'
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

const fontStyles = [
  {
     'value': 'base',
     'label': 'Base'
  }, {
     'value': 'italic',
     'label': 'Italic'
  }, {
     'value': 'bold',
     'label': 'Bold'
  }
]

const fontFamilies = ['Open Sans', 'Archivo Black', 'Abril Fatface', 'Dosis', 'Gloria Hallelujah', 'Raleway', 'Space Mono', 'Montserrat', 'Roboto Slab', 'Poppins', 'PT Serif', 'Baumans', 'Risque'].sort()

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

const filters = [
   {
      'label': 'Sepia',
      'value': 'sepia',
      'cssValue': 'sepia(90%) contrast(90%) brightness(90%)'
   }, {
      'label': 'Grayscale',
      'value': 'grayscale',
      'cssValue': 'grayscale(95%) contrast(125%)'
   }, {
      'label': 'Contrast',
      'value': 'contrast',
      'cssValue': 'contrast(190%)'
   }, {
      'label': 'Saturate',
      'value': 'saturate',
      'cssValue': 'saturate(190%)'
   }, {
      'label': 'Invert',
      'value': 'invert',
      'cssValue': 'invert(100%) contrast(150%) brightness(105%)'
   }, {
      'label': 'Soft Light',
      'value': 'soft_light',
      'cssValue': 'contrast(115%) saturate(115%)'
   }, {
      'label': 'Hard Light',
      'value': 'hard_light',
      'cssValue': 'contrast(140%) saturate(140%)'
   }, {
      'label': 'Heavy Light',
      'value': 'heavy_light',
      'cssValue': 'contrast(170%) saturate(170%) blur(0.3px)'
   }, {
      'label': 'Tilt',
      'value': 'tilt',
      'cssValue': 'brightness(105%) hue-rotate(90deg) saturate(110%) contrast(105%)'
   }, {
      'label': 'Reverse',
      'value': 'reverse',
      'cssValue': 'brightness(105%) hue-rotate(180deg) saturate(125%) contrast(110%)'
   }
];

export { defaultState, tags, slimSections, sections, alignments, fontStyles, fontFamilies, colorSchemes, filters }
