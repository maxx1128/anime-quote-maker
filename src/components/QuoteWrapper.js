import React from "react";
import axios from "axios";

import QuoteBox from "./QuoteBox";
import { defaultState, tags, slimSections, alignments, fontStyles, fontFamilies, colorSchemes, filters } from "./QuoteProps";

import Intro from "./QuoteForm/Intro";
import Tags from "./QuoteForm/Tags";
import Quote from "./QuoteForm/Quote";
import Styling from "./QuoteForm/Styling";
import Position from "./QuoteForm/Position";
import Filters from "./QuoteForm/Filters";
import Alignment from "./QuoteForm/Alignment";

class QuoteWrapper extends React.Component {
   state = defaultState
   allTags = tags
   allSlimSections = slimSections
   allAlignments = alignments
   allFontStyles = fontStyles
   allFontFamilies = fontFamilies
   allColorSchemes = colorSchemes
   allFilters = filters

   componentDidMount() { this.refreshAll(); }

   getQuote = (set) => axios.get('https://favqs.com/api/qotd').then(data => {
      this.setState({
         quote: data.data.quote.body,
         author: data.data.quote.author
      });

      if (set === 'fontSize') { this.randomizeFontSize(data.data.quote.body); }
   });

   randomProperty = (array) => array[Math.floor(Math.random()*array.length)]
   emptyFilters = () => this.state.filters.forEach(filter => this.updateFilters(filter));
   updateAlignment = (alignment) => this.setState({ alignment: alignment });
   updatePosX = (posX) => this.setState({ posX: posX });
   updatePosY = (posY) => this.setState({ posY: posY });
   updateQuote = (e) => this.setState({ quote: e.target.value })
   updateBgColor = (e) => this.setState({ bgColor: e.target.value })
   updateTextColor = (e) => this.setState({ textColor: e.target.value })
   updateStyle = (style) => this.setState({ style: style })
   updateFontStyle = (fontStyle) => this.setState({ fontStyle: fontStyle })
   updateFontFamily = (e) => this.setState({ fontFamily: e.target.value })
   updateTags = (e) => this.setState({ tags: e.target.value });
   updateSize = (e) => this.setState({ size: e.target.value });

   updateSection = (section, type = 'set') => {
      this.setState({ section: section });

      if (type === 'random') { this.fittingAlignment(section); }
   };

   updateFilters = (newFilterVal) => {
      let { filters } = this.state;

      filters.includes(newFilterVal)
         ? filters.splice(filters.indexOf(newFilterVal), 1)
         : filters.push(newFilterVal);

      this.setState({ filters: filters });
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

   getFilterValues = () => {
      const { filters } = this.state,
            activeFilters = this.allFilters.filter(filterItem => filters.includes(filterItem.value)),
            filterValues = activeFilters.map(filter => filter.cssValue);

      return filterValues;
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
            ceiling = 29 - decrease,
            bottom = 27 - decrease,
            floor = 24;

      const number = Math.floor(Math.random() * (ceiling - bottom) + bottom),
            weightedNumber = number > floor ? number : floor;
      this.setState({ size: weightedNumber });
   }

   randomFilter = () => {
      this.emptyFilters();

      const randomFilter = this.allFilters[Math.floor(Math.random()*this.allFilters.length)].value;

      this.updateFilters(randomFilter);
   }

   randomColorScheme = () => {
      const randomScheme = this.randomProperty(this.allColorSchemes)['label'];
      this.updateColorScheme(randomScheme, true);
   }

   randomFontFamily = () => {
      const randomFamily = this.randomProperty(this.allFontFamilies);
      this.setState({ fontFamily: randomFamily });
   }

   randomizeImage = () => {
      const newTags = this.allTags.sort(() => 0.5 - Math.random()),
            randomTag = this.randomProperty(newTags);

      this.setState({ tags: randomTag });
      this.refreshImage(randomTag);
   }

   fittingAlignment = (section) => {
      const getAlign = (alignVal) => {
         const alignArray = this.allAlignments.filter(alignment => alignment.label === alignVal);
         return alignArray[0].value;
      };

      if (section.includes('left')) {
         this.updateAlignment(getAlign('Left'));
      } else if (section.includes('right')) {
         this.updateAlignment(getAlign('Right'));
      } else {
         this.updateAlignment(getAlign('Center'));
      }
   }

   noTagImage = () => {
      this.setState({ tags: '' });
      this.refreshImage('');
   }

   refreshAll = () => {
      this.getQuote('fontSize');
      this.updateSection(this.randomProperty(this.allSlimSections).value, 'random');
      this.updateFontStyle(this.randomProperty(this.allFontStyles).value);
      this.noTagImage();
      this.randomColorScheme();
      this.randomFontFamily();
      this.randomFilter();
   }

   render() {
      const image = `https://ruby-anime-newsletter.herokuapp.com/?min_width=800&min_height=800&max_width=1500&max_height=1200&tags=${this.state.tags}#${this.state.hash}`;
      return (
         <div className={"qig-l-wrapper"}>
            <div className="qig-l-wrapper__form">

               <Intro />

               <Tags
                  tags={this.state.tags}
                  update={this.updateTags}
                  refresh={this.refreshImage}
                  random={this.randomizeImage}/>

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
                  updateColorScheme={this.updateColorScheme}/>

               <Position
                  selected={this.state.section}
                  updateSection={this.updateSection}/>

               <Filters
                  setFilters={this.state.filters}
                  updateFilters={this.updateFilters}/>

               <Alignment
                  setPosX={this.state.posX}
                  updatePosX={this.updatePosX}
                  setPosY={this.state.posY}
                  updatePosY={this.updatePosY}/>
            </div>

            <div className="qig-l-wrapper__result">
               <QuoteBox
                  image={image}
                  bgColor={this.state.bgColor}
                  textColor={this.state.textColor}
                  filters={this.getFilterValues}
                  fontStyle={this.state.fontStyle}
                  fontFamily={this.state.fontFamily}
                  alignment={this.state.alignment}
                  section={this.state.section}
                  size={this.state.size}
                  quote={this.state.quote}
                  author={this.state.author}
                  posX={this.state.posX}
                  posY={this.state.posY} />

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
