const defaultState = {
  quote: '',
  hash: '123',
  tags: '',
  section: 'top-row',
  alignment: 'left',
  size: 20,
  fontStyle: 'base',
  filters: [],
  posX: 'center',
  posY: 'center',
  bgColor: '#111111',
  textColor: '#eeeeee',
  fontFamily: 'Open Sans'
}

const tags = ['absurdres', 'scenery', 'library', 'city', 'space', 'thinking', 'sad', 'happy', 'forest', 'military', 'city', 'singing', 'running', 'heart', 'pokemon', 'animal', 'ponytail', 'jacket', 'goggles', 'weapon', 'skateboard']

const sections = [
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
     'value': 'middle-row',
     'label': 'Middle Row'
  }, {
     'value': 'bottom-row',
     'label': 'Bottom Row'
  }, {
     'value': 'left-column',
     'label': 'Left Column'
  }, {
     'value': 'right-column',
     'label': 'Right Column'
  }, {
     'value': 'top-left',
     'label': 'Top Left'
  }, {
     'value': 'top-right',
     'label': 'Top Right'
  }, {
     'value': 'bottom-left',
     'label': 'Bottom Left'
  }, {
     'value': 'bottom-right',
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

const posX = [
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

const posY = [
  {
     'value': 'top',
     'label': 'Top'
  }, {
     'value': 'center',
     'label': 'Center'
  }, {
     'value': 'bottom',
     'label': 'Bottom'
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

const fontFamilies = ['Open Sans', 'Archivo Black', 'Abril Fatface', 'Dosis', 'Cabin Sketch', 'Raleway', 'Space Mono', 'Montserrat', 'Roboto Slab', 'Poppins', 'PT Serif', 'Dancing Script'].sort()

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
     'label': 'cute',
     'values': {
        'bgColor': '#f69acd',
        'color': '#4d0220',
        'fontFamily': 'Cabin Sketch'
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
  }, {
     'label': 'Christmas',
     'values': {
        'bgColor': '#4d8951',
        'color': '#f095e1',
        'fontFamily': 'Dancing Script'
     }
  }
]

const filters = [
  {
     'label': 'Sepia',
     'value': 'sepia',
     'cssValue': 'sepia(90%)'
  }, {
     'label': 'Grayscale',
     'value': 'grayscale',
     'cssValue': 'grayscale(90%)'
  }, {
     'label': 'Blur',
     'value': 'blur',
     'cssValue': 'blur(1.5px)'
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
     'cssValue': 'invert(90%)'
  }
];

export { defaultState, tags, sections, alignments, posX, posY, fontStyles, fontFamilies, colorSchemes, filters }
