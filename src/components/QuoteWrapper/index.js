import React from "react";

import { shuffle } from "./core";
import { update } from "./update";
import { random } from "./random";
import { reset } from "./reset";
import { getQuote } from "./getQuote";

import QuoteBox from "../QuoteBox";
import { defaultState, tags, slimPositions, positions, alignments, fontStyles, slimFontStyles, fontFamilies, slimFontFamilies, startingFullFilters, fullFilters } from "./state";

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

   update = () => update(this);
   random = () => random(this.update);
   reset = () => reset(this.update);

   refreshAll = () => this.reset().all(this.getQuote, this.random)

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

   randomizeImage = () => {
      const newTags = shuffle(this.allTags),
            tagLimit = Math.floor(Math.random() * (3) + 1),
            randomTags = newTags.slice(0, tagLimit)
                                .map(tag => tagLimit > 1 && Math.random() >= 0.8 ? `-${tag}` : tag)
                                .join(',');

      this.setState({ tags: randomTags });
      this.reset().image(randomTags);
   }

   flipColorCodes = () => {
      this.setState({
         textColor: this.state.bgColor,
         bgColor: this.state.textColor
      })
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
                  refresh={this.reset().image}
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
                  randomColorScheme={this.random().colorCodes}
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
                  randomFilters={this.random().filters} />

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
                  resetTransforms={this.reset().transforms} />

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
                  resetPerspective={this.reset().perspective} />

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
