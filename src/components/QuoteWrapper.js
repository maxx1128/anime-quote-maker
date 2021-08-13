import React from "react";
import axios from "axios";

import QuoteBox from "./QuoteBox";
import { defaultState, tags, slimPositions, positions, alignments, fontStyles, slimFontStyles, fontFamilies, slimFontFamilies, colorSchemes, startingFullFilters, fullFilters } from "./QuoteProps";

import Intro from "./QuoteForm/Intro";
import Size from "./QuoteForm/Size";
import Tags from "./QuoteForm/Tags";
import Quote from "./QuoteForm/Quote";
import Styling from "./QuoteForm/Styling";
import Position from "./QuoteForm/Position";
import Filters from "./QuoteForm/Filters";
import Alignment from "./QuoteForm/Alignment";

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
   allColorSchemes = colorSchemes

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

   updateColorScheme = (calledScheme, swap = false) => {
      const selectedScheme  = this.allColorSchemes.find(scheme => scheme.label === calledScheme)['values'],
            willSwap        = (swap && Math.random() >= 0.5),
            backgroundColor = willSwap ? selectedScheme['color'] : selectedScheme['bgColor'],
            textColor       = willSwap ? selectedScheme['bgColor'] : selectedScheme['color'];

      this.setState({
         bgColor: backgroundColor,
         textColor: textColor,
         fontFamily: selectedScheme['fontFamily']
      })
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

   randomColorScheme = () => {
      const randomScheme = this.randomProperty(this.allColorSchemes)['label'];
      this.updateColorScheme(randomScheme, true);
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

   flipColorCodes = () => {
      this.setState({
         textColor: this.state.bgColor,
         bgColor: this.state.textColor
      })
   }

   noTagImage = () => {
      this.setState({ tags: '' });
      this.refreshImage('');
   }

   refreshAll = () => {
      this.getQuote('fontSize');
      this.updatePosition(this.randomProperty(this.allSlimPositions));
      this.updateFontStyle(this.randomProperty(this.allSlimFontStyles).value);
      this.noTagImage();
      this.randomColorCodes();
      this.randomFontFamily();
      this.setRandomFullFilter();

      this.updateAlignment('center');
   }

   render() {
      const image = `https://ruby-anime-newsletter.herokuapp.com/?min_width=700&min_height=700&tags=${this.state.tags}#${this.state.hash}`;
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

               <Quote
                  quote={this.state.quote}
                  update={this.updateQuote}
                  get={this.getQuote}/>

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
                  updateColorScheme={this.updateColorScheme}
                  randomColorScheme={this.randomColorCodes}
                  flipColorScheme={this.flipColorCodes}/>

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
                  updateQuoteLeft={this.updateQuoteLeft}/>

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

               <Alignment
                  setPosX={this.state.posX}
                  updatePosX={this.updatePosX}
                  setPosY={this.state.posY}
                  updatePosY={this.updatePosY}/>

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
                  bgColor={this.state.bgColor}
                  textColor={this.state.textColor}
                  allFilters={this.getFilterValues}
                  fontStyle={this.state.fontStyle}
                  fontFamily={this.state.fontFamily}
                  alignment={this.state.alignment}
                  size={this.state.size}
                  quote={this.state.quote}
                  author={this.state.author}
                  posX={this.state.posX}
                  posY={this.state.posY}
                  top={this.state.quoteTop}
                  right={this.state.quoteRight}
                  bottom={this.state.quoteBottom}
                  left={this.state.quoteLeft} />

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
