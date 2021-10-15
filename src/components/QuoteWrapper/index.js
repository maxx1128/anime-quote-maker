import React from "react";

import { randomProperty, shuffle, randomColorCode } from "./core";
import { update } from "./update";
import { getQuote } from "./getQuote";

import QuoteBox from "../QuoteBox";
import { defaultState, tags, slimPositions, slimShapes, verticalShapes, positions, alignments, fontStyles, slimFontStyles, fontFamilies, slimFontFamilies, startingFullFilters, fullFilters } from "./state";

import Intro from "../QuoteForm/Intro";
import CustomImage from "../QuoteForm/CustomImage";
import Size from "../QuoteForm/Size";
import Alignment from "../QuoteForm/Alignment";
import Tags from "../QuoteForm/Tags";
import Quote from "../QuoteForm/Quote";
import Shape from "../QuoteForm/Shape";
import Styling from "../QuoteForm/Styling";
import Position from "../QuoteForm/Position";
import Filters from "../QuoteForm/Filters";
import Transform from "../QuoteForm/Transform";
import Perspective from "../QuoteForm/Perspective";

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

   getQuote = (set) => getQuote(this, set)

   emptyFilters = () => this.setState({ filters: [] });

   update = () => update(this);

   randomFilters = () => {
      const randomRange = (min, max) => {
         return Math.floor(Math.random() * (max - min + 1) + min)
      }

      this.update().contrast(randomRange(60, 140));
      this.update().hueRotate(randomRange(0, 180));
      this.update().saturate(randomRange(85, 150));
      this.update().brightness(randomRange(100, 110));
      this.update().sepia(randomRange(0, 25));
      this.update().blur(0);
      this.update().invert(0);
   }

   setRandomFullFilter = () => {
      const useRandomFilters = Math.random() >= 0.75;

      if (useRandomFilters) {
         this.randomFilters();
      } else {
         this.update().fullFilter(randomProperty(this.allStartingFullFilters));
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
      const randomFamily = randomProperty(this.allSlimFontFamilies);
      this.setState({ fontFamily: randomFamily });
   }

   randomizeImage = () => {
      const newTags = shuffle(this.allTags),
            tagLimit = Math.floor(Math.random() * (3) + 1),
            randomTags = newTags.slice(0, tagLimit)
                                .map(tag => tagLimit > 1 && Math.random() >= 0.8 ? `-${tag}` : tag)
                                .join(',');

      this.setState({ tags: randomTags });
      this.refreshImage(randomTags);
   }

   randomColorCodes = () => {
      const lightColor  = randomColorCode(['F', 'E', 'D', 'C']),
            darkColor   = randomColorCode([0, 1, 2, 3]),
            hasDarkText = Math.random() >= 0.5;


      this.setState({
         textColor: hasDarkText ? darkColor : lightColor,
         bgColor:   hasDarkText ? lightColor : darkColor
      });
   }

   randomShape = (position) => {
      let shape = false;

      if (position === '3/4') {
         shape = randomProperty(verticalShapes)["value"];
      } else if (position === 'Spaced Bottom') {
         shape = randomProperty(slimShapes)["value"];
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
      const position = randomProperty(this.allSlimPositions);

      this.getQuote('fontSize');
      this.update().position(position);
      this.update().fontStyle(randomProperty(this.allSlimFontStyles).value);
      this.setInitialImageTags();
      this.randomColorCodes();
      this.randomFontFamily();
      this.setRandomFullFilter();
      this.resetTransforms();
      this.resetPerspective();
      this.randomShape(position["label"]);

      this.update().alignment('center');
   }

   render() {
      const image = this.state.customImageUrl ? this.state.customImageUrl : `https://ruby-anime-newsletter.herokuapp.com/?min_width=700&min_height=700&tags=${this.state.tags}#${this.state.hash}`;
      return (
         <div className={`qig-l-wrapper ${this.state.vertical ? 'qig-l-wrapper--vertical' : ''}`}>
            <div className="qig-l-wrapper__form">

               <Intro />

               <Tags
                  tags={this.state.tags}
                  update={this.update().tags}
                  refresh={this.refreshImage}
                  random={this.randomizeImage}/>

               <Size
                  width={this.state.width}
                  updateWidth={this.update().width}
                  height={this.state.height}
                  updateHeight={this.update().height}/>

               <CustomImage
                  url={this.state.customImageUrl}
                  updateUrl={this.update().customImageUrl}/>

               <Alignment
                  setPosX={this.state.posX}
                  updatePosX={this.update().posX}
                  setPosY={this.state.posY}
                  updatePosY={this.update().posY}/>

               <Quote
                  quote={this.state.quote}
                  update={this.update().quote}
                  get={this.getQuote}/>

               <Position
                  quoteTop={this.state.quoteTop}
                  quoteRight={this.state.quoteRight}
                  quoteBottom={this.state.quoteBottom}
                  quoteLeft={this.state.quoteLeft}
                  verticalLimit={this.state.height}
                  horizontalLimit={this.state.width}
                  allPositions={this.allPositions}
                  updatePosition={this.update().position}
                  updateQuoteTop={this.update().quoteTop}
                  updateQuoteRight={this.update().quoteRight}
                  updateQuoteBottom={this.update().quoteBottom}
                  updateQuoteLeft={this.update().quoteLeft}
                  paddingTop={this.state.paddingTop}
                  updatePaddingTop={this.update().paddingTop}
                  paddingRight={this.state.paddingRight}
                  updatePaddingRight={this.update().paddingRight}
                  paddingBottom={this.state.paddingBottom}
                  updatePaddingBottom={this.update().paddingBottom}
                  paddingLeft={this.state.paddingLeft}
                  updatePaddingLeft={this.update().paddingLeft} />

               <Shape
                  shape={this.state.shape}
                  updateShape={this.update().shape}
                  shapeSize={this.state.shapeSize}
                  updateShapeSize={this.update().shapeSize}
                  shapePosition={this.state.shapePosition}
                  updateShapePosition={this.update().shapePosition} />

               <Styling
                  bg={this.state.bgColor}
                  updateBg={this.update().bgColor}
                  text={this.state.textColor}
                  updateText={this.update().textColor}
                  alignment={this.state.alignment}
                  updateAlignment={this.update().alignment}
                  fontStyle={this.state.fontStyle}
                  updateFontStyle={this.update().fontStyle}
                  size={this.state.size}
                  updateSize={this.update().size}
                  fontFamily={this.state.fontFamily}
                  updateFontFamily={this.update().fontFamily}
                  randomColorScheme={this.randomColorCodes}
                  flipColorScheme={this.flipColorCodes}/>

               <Filters
                  contrast={this.state.filterContrast}
                  updateContrast={this.update().contrast}
                  hueRotate={this.state.filterHueRotate}
                  updateHueRotate={this.update().hueRotate}
                  saturate={this.state.filterSaturate}
                  updateSaturate={this.update().saturate}
                  brightness={this.state.filterBrightness}
                  updateBrightness={this.update().brightness}
                  sepia={this.state.filterSepia}
                  updateSepia={this.update().sepia}
                  blur={this.state.filterBlur}
                  updateBlur={this.update().blur}
                  invert={this.state.filterInvert}
                  updateInvert={this.update().invert}
                  fullFilters={this.allFullFilters}
                  updateFullFilter={this.update().fullFilter}
                  randomFilters={this.randomFilters} />

               <Transform
                  verticalLimit={this.state.height}
                  horizontalLimit={this.state.width}
                  boxShadow={this.state.boxShadow}
                  updateBoxShadow={this.update().boxShadow}
                  boxShadowColor={this.state.boxShadowColor}
                  updateBoxShadowColor={this.update().boxShadowColor}
                  borderRadius={this.state.borderRadius}
                  updateBorderRadius={this.update().borderRadius}
                  opacity={this.state.opacity}
                  updateOpacity={this.update().opacity}
                  scaleX={this.state.transformScaleX}
                  updateScaleX={this.update().transformScaleX}
                  scaleY={this.state.transformScaleY}
                  updateScaleY={this.update().transformScaleY}
                  skewX={this.state.transformSkewX}
                  updateSkewX={this.update().transformSkewX}
                  skewY={this.state.transformSkewY}
                  updateSkewY={this.update().transformSkewY}
                  translateX={this.state.transformTranslateX}
                  updateTranslateX={this.update().transformTranslateX}
                  translateY={this.state.transformTranslateY}
                  updateTranslateY={this.update().transformTranslateY}
                  rotateFull={this.state.transformRotateFull}
                  updateRotateFull={this.update().transformRotateFull}
                  resetTransforms={this.resetTransforms} />

               <Perspective
                  rotateX={this.state.transformRotateX}
                  updateRotateX={this.update().transformRotateX}
                  rotateY={this.state.transformRotateY}
                  updateRotateY={this.update().transformRotateY}
                  perspective={this.state.perspective}
                  updatePerspective={this.update().perspective}
                  perspectiveOriginX={this.state.perspectiveOriginX}
                  updatePerspectiveOriginX={this.update().perspectiveOriginX}
                  perspectiveOriginY={this.state.perspectiveOriginY}
                  updatePerspectiveOriginY={this.update().perspectiveOriginY}
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
