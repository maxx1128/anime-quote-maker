export function get(state) {
   return {
      image: () => state.customImageUrl ? state.customImageUrl : `https://ruby-anime-newsletter.herokuapp.com/?min_width=700&min_height=700&tags=${state.tags}#${state.hash}`,

      filters: () => {
         return [
            {
               "name": "contrast",
               "value": state.filterContrast
            }, {
               "name": "hue-rotate",
               "value": state.filterHueRotate
            }, {
               "name": "saturate",
               "value": state.filterSaturate
            }, {
               "name": "brightness",
               "value": state.filterBrightness
            }, {
               "name": "sepia",
               "value": state.filterSepia
            }, {
               "name": "blur",
               "value": state.filterBlur
            }, {
               "name": "invert",
               "value": state.filterInvert
            }
         ];
      },
      transforms: () => {
         return [
            {
               "name": "scaleX",
               "value": state.transformScaleX
            }, {
               "name": "scaleY",
               "value": state.transformScaleY
            }, {
               "name": "skewX",
               "value": state.transformSkewX
            }, {
               "name": "skewY",
               "value": state.transformSkewY
            }, {
               "name": "translateX",
               "value": state.transformTranslateX
            }, {
               "name": "translateY",
               "value": state.transformTranslateY
            }, {
               "name": "rotate",
               "value": state.transformRotateFull
            }, {
               "name": "rotateX",
               "value": state.transformRotateX
            }, {
               "name": "rotateY",
               "value": state.transformRotateY
            }
         ]
      }
   }
}
