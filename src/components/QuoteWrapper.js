import React from "react";
import axios from "axios";

import QuoteBox from "./QuoteBox";
import { defaultState, tags, slimPositions, slimShapes, verticalShapes, positions, alignments, fontStyles, slimFontStyles, fontFamilies, slimFontFamilies, startingFullFilters, fullFilters } from "./QuoteProps";

import Intro from "./QuoteForm/Intro";
import CustomImage from "./QuoteForm/CustomImage";
import Size from "./QuoteForm/Size";
import Alignment from "./QuoteForm/Alignment";
import Tags from "./QuoteForm/Tags";
import Quote from "./QuoteForm/Quote";
import Shape from "./QuoteForm/Shape";
import Styling from "./QuoteForm/Styling";
import Position from "./QuoteForm/Position";
import Filters from "./QuoteForm/Filters";
import Transform from "./QuoteForm/Transform";
import Perspective from "./QuoteForm/Perspective";

import randomCustomQuote from "./../data/customQuotes";

class QuoteWrapper extends React.Component {
   state = defaultState
   allTags = tags
   allStartingFullFilters = startingFullFilters
   allFullFilters = fullFilters
   allSlimPositions = slimPositions
   allPositions = positions
   allAlignments = alignments
   allFontStyles = fontStyles
   allSlimFontStyles = slimFontStyles
   allSlimFontFamilies = slimFontFamilies
   allFontFamilies = fontFamilies

   componentDidMount() { this.refreshAll(); }

   getQuote = (set) => {
      let quote, author;
      const randomQuote = randomCustomQuote();

      axios.get('https://api.quotable.io/random').then(response => {
         const useRandomQuote = Math.floor(Math.random() * 4) === 0;

         if (useRandomQuote) {
            quote = randomQuote.content;
            author = randomQuote.author;
         } else {
            quote = response.data.content;
            author = response.data.author;
         }
      }).catch(() => {
         quote = randomQuote.content;
         author = randomQuote.author;
      }).finally(() => {
         this.setState({
            quote: quote,
            author: author
         });

         if (set === 'fontSize') { this.randomizeFontSize(quote); }
      });
   };

   randomProperty = (array) => array[Math.floor(Math.random()*array.length)]
   emptyFilters = () => this.setState({ filters: [] });
   updateAlignment = (alignment) => this.setState({ alignment: alignment });
   updateShape = (shape) => this.setState({ shape: shape });
   updateShapeSize = (e) => this.setState({ shapeSize: e.target ? e.target.value : e })
   updateShapePosition = (e) => this.setState({ shapePosition: e.target ? e.target.value : e })
   updateCustomImageUrl = (e) => this.setState({ customImageUrl: e.target ? e.target.value : e  })
   updatePosX = (e) => this.setState({ posX: e.target.value });
   updatePosY = (e) => this.setState({ posY: e.target.value });
   updateQuote = (e) => this.setState({ quote: e.target.value })
   updateBgColor = (e) => this.setState({ bgColor: e.target.value })
   updateTextColor = (e) => this.setState({ textColor: e.target.value })
   updateStyle = (style) => this.setState({ style: style })
   updateFontStyle = (fontStyle) => this.setState({ fontStyle: fontStyle })
   updateFontFamily = (e) => this.setState({ fontFamily: e.target.value })
   updateTags = (newTags) => this.setState({ tags: newTags });
   updateSize = (e) => this.setState({ size: e.target.value });
   updateWidth = (e) => this.setState({ width: e.target ? e.target.value : e });
   updateHeight = (e) => this.setState({ height: e.target ? e.target.value : e });

   updateContrast = (e) => this.setState({ filterContrast: e.target ? e.target.value : e });
   updateHueRotate = (e) => this.setState({ filterHueRotate: e.target ? e.target.value : e });
   updateSaturate = (e) => this.setState({ filterSaturate: e.target ? e.target.value : e });
   updateBrightness = (e) => this.setState({ filterBrightness: e.target ? e.target.value : e });
   updateSepia = (e) => this.setState({ filterSepia: e.target ? e.target.value : e });
   updateBlur = (e) => this.setState({ filterBlur: e.target ? e.target.value : e });
   updateInvert = (e) => this.setState({ filterInvert: e.target ? e.target.value : e });

   updateQuoteTop = (e) => this.setState({ quoteTop: e.target ? e.target.value : e });
   updateQuoteRight = (e) => this.setState({ quoteRight: e.target ? e.target.value : e });
   updateQuoteBottom = (e) => this.setState({ quoteBottom: e.target ? e.target.value : e });
   updateQuoteLeft = (e) => this.setState({ quoteLeft: e.target ? e.target.value : e });
   updatePaddingTop = (e) => this.setState({ paddingTop: e.target ? e.target.value : e });
   updatePaddingRight = (e) => this.setState({ paddingRight: e.target ? e.target.value : e });
   updatePaddingBottom = (e) => this.setState({ paddingBottom: e.target ? e.target.value : e });
   updatePaddingLeft = (e) => this.setState({ paddingLeft: e.target ? e.target.value : e });

   updateBoxShadow = (e) => this.setState({ boxShadow: e.target ? e.target.value : e });
   updateBoxShadowColor = (e) => this.setState({ boxShadowColor: e.target ? e.target.value : e });
   updateBorderRadius = (e) => this.setState({ borderRadius: e.target ? e.target.value : e });
   updateOpacity = (e) => this.setState({ opacity: e.target ? e.target.value : e });

   updateTransformScaleX = (e) => this.setState({ transformScaleX: e.target ? e.target.value : e });
   updateTransformScaleY = (e) => this.setState({ transformScaleY: e.target ? e.target.value : e });
   updateTransformSkewX = (e) => this.setState({ transformSkewX: e.target ? e.target.value : e });
   updateTransformSkewY = (e) => this.setState({ transformSkewY: e.target ? e.target.value : e });
   updateTransformTranslateX = (e) => this.setState({ transformTranslateX: e.target ? e.target.value : e });
   updateTransformTranslateY = (e) => this.setState({ transformTranslateY: e.target ? e.target.value : e });
   updateTransformRotateFull = (e) => this.setState({ transformRotateFull: e.target ? e.target.value : e });
   updateTransformRotateX = (e) => this.setState({ transformRotateX: e.target ? e.target.value : e });
   updateTransformRotateY = (e) => this.setState({ transformRotateY: e.target ? e.target.value : e });

   updatePerspective = (e) => this.setState({ perspective: e.target ? e.target.value : e });
   updatePerspectiveOriginX = (e) => this.setState({ perspectiveOriginX: e.target ? e.target.value : e });
   updatePerspectiveOriginY = (e) => this.setState({ perspectiveOriginY: e.target ? e.target.value : e });

   shuffle = (a) => {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
   }

   updatePosition = (position) => {
      const { value } = position;

      this.setState({
         quoteTop: value['top'],
         quoteRight: value['right'],
         quoteBottom: value['bottom'],
         quoteLeft: value['left']
      })
   }

   updateFullFilter = (fullFilter) => {
      const filterVals = fullFilter["values"];
      const setters = {
         "contrast": this.updateContrast,
         "hueRotate": this.updateHueRotate,
         "saturate": this.updateSaturate,
         "brightness": this.updateBrightness,
         "sepia": this.updateSepia,
         "blur": this.updateBlur,
         "invert": this.updateInvert
      }

      for (let filter in filterVals) {
         const setter = setters[filter];
         setter(filterVals[filter]);
      }
   }

   randomFilters = () => {
      const randomRange = (min, max) => {
         return Math.floor(Math.random() * (max - min + 1) + min)
      }

      this.updateContrast(randomRange(60, 140));
      this.updateHueRotate(randomRange(0, 180));
      this.updateSaturate(randomRange(85, 150));
      this.updateBrightness(randomRange(100, 110));
      this.updateSepia(randomRange(0, 25));
      this.updateBlur(0);
      this.updateInvert(0);
   }

   setRandomFullFilter = () => {
      const useRandomFilters = Math.random() >= 0.75;

      if (useRandomFilters) {
         this.randomFilters();
      } else {
         this.updateFullFilter(this.randomProperty(this.allStartingFullFilters));
      }
   }

   toggleVertical = () => {
      const isNowVertical = !this.state.vertical,
            width = isNowVertical ? 1024 : 700,
            height = isNowVertical ? 300 : 700;

      this.setState({
         vertical: isNowVertical,
         width: width,
         height: height
      });
   }

   getFilterValues = () => {
      return [
         {
            "name": "contrast",
            "value": this.state.filterContrast
         }, {
            "name": "hue-rotate",
            "value": this.state.filterHueRotate
         }, {
            "name": "saturate",
            "value": this.state.filterSaturate
         }, {
            "name": "brightness",
            "value": this.state.filterBrightness
         }, {
            "name": "sepia",
            "value": this.state.filterSepia
         }, {
            "name": "blur",
            "value": this.state.filterBlur
         }, {
            "name": "invert",
            "value": this.state.filterInvert
         }
      ];
   }

   getTransformValues = () => {
      return [
         {
            "name": "scaleX",
            "value": this.state.transformScaleX
         }, {
            "name": "scaleY",
            "value": this.state.transformScaleY
         }, {
            "name": "skewX",
            "value": this.state.transformSkewX
         }, {
            "name": "skewY",
            "value": this.state.transformSkewY
         }, {
            "name": "translateX",
            "value": this.state.transformTranslateX
         }, {
            "name": "translateY",
            "value": this.state.transformTranslateY
         }, {
            "name": "rotate",
            "value": this.state.transformRotateFull
         }, {
            "name": "rotateX",
            "value": this.state.transformRotateX
         }, {
            "name": "rotateY",
            "value": this.state.transformRotateY
         }
      ]
   }

   refreshImage = (newTags) => {
      this.setState({
         tags: newTags,
         hash: Math.floor(Math.random() * 100)
      });
   }

   randomizeFontSize = (quote) => {
      const quoteLength = quote.split('').length,
            decrease = Math.floor((quoteLength - 40) / 15),
            ceiling = 26 - decrease,
            bottom = 24 - decrease,
            floor = 21;

      const number = Math.floor(Math.random() * (ceiling - bottom) + bottom),
            weightedNumber = number > floor ? number : floor;
      this.setState({ size: weightedNumber });
   }

   randomFontFamily = () => {
      const randomFamily = this.randomProperty(this.allSlimFontFamilies);
      this.setState({ fontFamily: randomFamily });
   }

   randomizeImage = () => {
      const shuffle = (array) => {
         var currentIndex = array.length, temporaryValue, randomIndex;

         // While there remain elements to shuffle...
         while (0 !== currentIndex) {

           // Pick a remaining element...
           randomIndex = Math.floor(Math.random() * currentIndex);
           currentIndex -= 1;

           // And swap it with the current element.
           temporaryValue = array[currentIndex];
           array[currentIndex] = array[randomIndex];
           array[randomIndex] = temporaryValue;
         }

         return array;
      };

      const newTags = shuffle(this.allTags),
            tagLimit = Math.floor(Math.random() * (3) + 1),
            randomTags = newTags.slice(0, tagLimit)
                                .map(tag => tagLimit > 1 && Math.random() >= 0.8 ? `-${tag}` : tag)
                                .join(',');

      this.setState({ tags: randomTags });
      this.refreshImage(randomTags);
   }

   randomColorCode = (characters) => {
      const getRandomChar = () => characters[Math.floor(Math.random()*characters.length)];

      return `#${getRandomChar()}${getRandomChar()}${getRandomChar()}${getRandomChar()}${getRandomChar()}${getRandomChar()}`
   }

   randomColorCodes = () => {
      const lightColor  = this.randomColorCode(['F', 'E', 'D', 'C']),
            darkColor   = this.randomColorCode([0, 1, 2, 3]),
            hasDarkText = Math.random() >= 0.5;


      this.setState({
         textColor: hasDarkText ? darkColor : lightColor,
         bgColor:   hasDarkText ? lightColor : darkColor
      });
   }

   randomShape = (position) => {
      let shape = false;

      if (position === '3/4') {
         shape = this.randomProperty(verticalShapes)["value"];
      } else if (position === 'Spaced Bottom') {
         shape = this.randomProperty(slimShapes)["value"];
      } else {
         shape = 'none'
      }

      if (shape) {
         this.setState({
            shape: shape
         });
      }
   }

   flipColorCodes = () => {
      this.setState({
         textColor: this.state.bgColor,
         bgColor: this.state.textColor
      })
   }

   setInitialImageTags = () => {
      this.setState({ tags: 'highres' });
      this.refreshImage('highres');
   }

   resetTransforms = () => {
      this.setState({
         boxShadow: .2,
         boxShadowColor: '#000000',
         opacity: 0.925,
         transformScaleX: 1,
         transformScaleY: 1,
         transformSkewX: 0,
         transformSkewY: 0,
         transformTranslateX: 0,
         transformTranslateY: 0,
         transformRotateFull: 0
      })
   }

   resetPerspective = () => {
      this.setState({
         perspective: 0,
         perspectiveOriginX: 0,
         perspectiveOriginY: 0,
         transformRotateX: 0,
         transformRotateY: 0
      });
   }

   refreshAll = () => {
      const position = this.randomProperty(this.allSlimPositions);

      this.getQuote('fontSize');
      this.updatePosition(position);
      this.updateFontStyle(this.randomProperty(this.allSlimFontStyles).value);
      this.setInitialImageTags();
      this.randomColorCodes();
      this.randomFontFamily();
      this.setRandomFullFilter();
      this.resetTransforms();
      this.resetPerspective();
      this.randomShape(position["label"]);

      this.updateAlignment('center');
   }

   render() {
      console.log(this.state.tags);
      const image = this.state.customImageUrl ? this.state.customImageUrl : `https://ruby-anime-newsletter.herokuapp.com/?min_width=700&min_height=700&tags=${this.state.tags}#${this.state.hash}`;
      return (
         <div className={`qig-l-wrapper ${this.state.vertical ? 'qig-l-wrapper--vertical' : ''}`}>
            <div className="qig-l-wrapper__form">

               <Intro />

               <Tags
                  tags={this.state.tags}
                  update={this.updateTags}
                  refresh={this.refreshImage}
                  random={this.randomizeImage}/>

               <Size
                  width={this.state.width}
                  updateWidth={this.updateWidth}
                  height={this.state.height}
                  updateHeight={this.updateHeight}/>

               <CustomImage
                  url={this.state.customImageUrl}
                  updateUrl={this.updateCustomImageUrl}/>

               <Alignment
                  setPosX={this.state.posX}
                  updatePosX={this.updatePosX}
                  setPosY={this.state.posY}
                  updatePosY={this.updatePosY}/>

               <Quote
                  quote={this.state.quote}
                  update={this.updateQuote}
                  get={this.getQuote}/>

               <Position
                  quoteTop={this.state.quoteTop}
                  quoteRight={this.state.quoteRight}
                  quoteBottom={this.state.quoteBottom}
                  quoteLeft={this.state.quoteLeft}
                  verticalLimit={this.state.height}
                  horizontalLimit={this.state.width}
                  allPositions={this.allPositions}
                  updatePosition={this.updatePosition}
                  updateQuoteTop={this.updateQuoteTop}
                  updateQuoteRight={this.updateQuoteRight}
                  updateQuoteBottom={this.updateQuoteBottom}
                  updateQuoteLeft={this.updateQuoteLeft}
                  paddingTop={this.state.paddingTop}
                  updatePaddingTop={this.updatePaddingTop}
                  paddingRight={this.state.paddingRight}
                  updatePaddingRight={this.updatePaddingRight}
                  paddingBottom={this.state.paddingBottom}
                  updatePaddingBottom={this.updatePaddingBottom}
                  paddingLeft={this.state.paddingLeft}
                  updatePaddingLeft={this.updatePaddingLeft} />

               <Shape
                  shape={this.state.shape}
                  updateShape={this.updateShape}
                  shapeSize={this.state.shapeSize}
                  updateShapeSize={this.updateShapeSize}
                  shapePosition={this.state.shapePosition}
                  updateShapePosition={this.updateShapePosition} />

               <Styling
                  bg={this.state.bgColor}
                  updateBg={this.updateBgColor}
                  text={this.state.textColor}
                  updateText={this.updateTextColor}
                  alignment={this.state.alignment}
                  updateAlignment={this.updateAlignment}
                  fontStyle={this.state.fontStyle}
                  updateFontStyle={this.updateFontStyle}
                  size={this.state.size}
                  updateSize={this.updateSize}
                  fontFamily={this.state.fontFamily}
                  updateFontFamily={this.updateFontFamily}
                  randomColorScheme={this.randomColorCodes}
                  flipColorScheme={this.flipColorCodes}/>

               <Filters
                  contrast={this.state.filterContrast}
                  updateContrast={this.updateContrast}
                  hueRotate={this.state.filterHueRotate}
                  updateHueRotate={this.updateHueRotate}
                  saturate={this.state.filterSaturate}
                  updateSaturate={this.updateSaturate}
                  brightness={this.state.filterBrightness}
                  updateBrightness={this.updateBrightness}
                  sepia={this.state.filterSepia}
                  updateSepia={this.updateSepia}
                  blur={this.state.filterBlur}
                  updateBlur={this.updateBlur}
                  invert={this.state.filterInvert}
                  updateInvert={this.updateInvert}
                  fullFilters={this.allFullFilters}
                  updateFullFilter={this.updateFullFilter}
                  randomFilters={this.randomFilters} />

               <Transform
                  verticalLimit={this.state.height}
                  horizontalLimit={this.state.width}
                  boxShadow={this.state.boxShadow}
                  updateBoxShadow={this.updateBoxShadow}
                  boxShadowColor={this.state.boxShadowColor}
                  updateBoxShadowColor={this.updateBoxShadowColor}
                  borderRadius={this.state.borderRadius}
                  updateBorderRadius={this.updateBorderRadius}
                  opacity={this.state.opacity}
                  updateOpacity={this.updateOpacity}
                  scaleX={this.state.transformScaleX}
                  updateScaleX={this.updateTransformScaleX}
                  scaleY={this.state.transformScaleY}
                  updateScaleY={this.updateTransformScaleY}
                  skewX={this.state.transformSkewX}
                  updateSkewX={this.updateTransformSkewX}
                  skewY={this.state.transformSkewY}
                  updateSkewY={this.updateTransformSkewY}
                  translateX={this.state.transformTranslateX}
                  updateTranslateX={this.updateTransformTranslateX}
                  translateY={this.state.transformTranslateY}
                  updateTranslateY={this.updateTransformTranslateY}
                  rotateFull={this.state.transformRotateFull}
                  updateRotateFull={this.updateTransformRotateFull}
                  resetTransforms={this.resetTransforms} />

               <Perspective
                  rotateX={this.state.transformRotateX}
                  updateRotateX={this.updateTransformRotateX}
                  rotateY={this.state.transformRotateY}
                  updateRotateY={this.updateTransformRotateY}
                  perspective={this.state.perspective}
                  updatePerspective={this.updatePerspective}
                  perspectiveOriginX={this.state.perspectiveOriginX}
                  updatePerspectiveOriginX={this.updatePerspectiveOriginX}
                  perspectiveOriginY={this.state.perspectiveOriginY}
                  updatePerspectiveOriginY={this.updatePerspectiveOriginY}
                  resetPerspective={this.resetPerspective} />

               <button className="qig-button--full" onClick={this.toggleVertical}>
                 {this.state.vertical ? 'Horizontal' : 'Vertical'} View
               </button>
               <br/>
            </div>

            <div className="qig-l-wrapper__result">
               <QuoteBox
                  image={image}
                  width={this.state.width}
                  height={this.state.height}
                  shape={this.state.shape}
                  shapeSize={this.state.shapeSize}
                  shapePosition={this.state.shapePosition}
                  bgColor={this.state.bgColor}
                  textColor={this.state.textColor}
                  allFilters={this.getFilterValues}
                  allTransforms={this.getTransformValues}
                  fontStyle={this.state.fontStyle}
                  fontFamily={this.state.fontFamily}
                  alignment={this.state.alignment}
                  size={this.state.size}
                  quote={this.state.quote}
                  author={this.state.author}
                  posX={this.state.posX}
                  posY={this.state.posY}
                  boxShadow={this.state.boxShadow}
                  boxShadowColor={this.state.boxShadowColor}
                  opacity={this.state.opacity}
                  borderRadius={this.state.borderRadius}
                  paddingTop={this.state.paddingTop}
                  paddingRight={this.state.paddingRight}
                  paddingBottom={this.state.paddingBottom}
                  paddingLeft={this.state.paddingLeft}
                  top={this.state.quoteTop}
                  right={this.state.quoteRight}
                  bottom={this.state.quoteBottom}
                  left={this.state.quoteLeft}
                  perspective={this.state.perspective}
                  perspectiveOriginX={this.state.perspectiveOriginX}
                  perspectiveOriginY={this.state.perspectiveOriginY} />

               <div className="qig-l-wrapper__randomize">
                  <button className="qig-button--full" onClick={this.refreshAll}>
                     Randomize All!
                  </button>
               </div>
            </div>
         </div>
      );
   }
}

export default QuoteWrapper;
