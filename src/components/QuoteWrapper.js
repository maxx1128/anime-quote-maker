import React from "react";
import axios from "axios";

import QuoteBox from "./QuoteBox";
import RadioItems from "./RadioItems";
import { defaultState, tags, sections, alignments, posX, posY, fontStyles, fontFamilies, colorSchemes, filters } from "./QuoteProps";

import Intro from "./QuoteForm/Intro";
import Tags from "./QuoteForm/Tags";

class QuoteWrapper extends React.Component {
   state = defaultState
   allTags = tags
   allSections = sections
   allAlignments = alignments
   allPosX = posX
   allPosY = posY
   allFontStyles = fontStyles
   allFontFamilies = fontFamilies
   allColorSchemes = colorSchemes
   allFilters = filters

   componentDidMount() { this.refreshAll(); }

   getQuote = () => axios.get('https://favqs.com/api/qotd').then(data => this.setState({
      quote: data.data.quote.body,
      author: data.data.quote.author
   }));

   randomProperty = (array) => array[Math.floor(Math.random()*array.length)]
   emptyFilters = () => this.state.filters.forEach(filter => this.updateFilters(filter));
   updateSection = (section) => this.setState({ section: section });
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

   updateFilters = (newFilterVal) => {
      let { filters } = this.state;

      filters.includes(newFilterVal)
         ? filters.splice(filters.indexOf(newFilterVal), 1)
         : filters.push(newFilterVal);

      this.setState({ filters: filters });
   }

   updateColorScheme = (calledScheme) => {
      const selectedScheme = this.allColorSchemes.find(scheme => scheme.label === calledScheme)['values'];

      this.setState({
         bgColor: selectedScheme['bgColor'],
         textColor: selectedScheme['color'],
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

   randomizeFontSize = () => {
      const number = Math.floor(Math.random() * (30 - 20) + 20)
      this.setState({ size: number });
   }

   randomFilter = () => {
      this.emptyFilters();

      const randomFilter = this.allFilters[Math.floor(Math.random()*this.allFilters.length)].value;

      this.updateFilters(randomFilter);
   }

   randomColorScheme = () => {
      const randomScheme = this.randomProperty(this.allColorSchemes)['label'];
      this.updateColorScheme(randomScheme);
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

   noTagImage = () => {
      this.setState({ tags: '' });
      this.refreshImage('');
   }

   refreshAll = () => {
      this.getQuote();
      this.updateSection(this.randomProperty(this.allSections).value)
      this.updateAlignment(this.randomProperty(this.allAlignments).value)
      this.updateFontStyle(this.randomProperty(this.allFontStyles).value)
      this.noTagImage();
      this.randomizeFontSize();
      this.randomColorScheme();
      this.randomFontFamily();
      this.randomFilter();
   }

   render() {
      const image = `https://ruby-anime-newsletter.herokuapp.com/?min_width=800&min_height=800&max_width=1500&max_height=1200&tags=${this.state.tags}#${this.state.hash}`;
      return (
         <div className={`qig-l-wrapper qig-l-wrapper--${this.props.view}`}>
            <div className="qig-l-wrapper__form">

               <Intro />

               <div className="qig-l-wrapper__form-item qig-l-controls__tags">
                  <Tags
                     tags={this.state.tags}
                     update={this.updateTags}
                     refresh={this.refreshImage}
                     random={this.randomizeImage}/>
               </div>

               <div className="qig-l-wrapper__form-item qig-l-controls__quote">
                  <h4 className="qig-l-wrapper__form-header">
                     Change the Quote's Content
                  </h4>
                  <label>
                    <textarea rows="3" value={this.state.quote} onChange={this.updateQuote} />
                  </label>

                  <button onClick={() => this.getQuote()}>
                     Get a Random Quote
                  </button>
               </div>

               <div className="qig-l-wrapper__form-item qig-l-controls__styling">
                  <h4 className="qig-l-wrapper__form-header">
                     Change the Quote Styling
                  </h4>

                  <div className="qig-l-radios__wrapper">
                     <div className="qig-l-radios__wrapper qig-l-radios__wrapper--spaced-right">
                        <input type="color" name="background-color" onChange={this.updateBgColor} value={this.state.bgColor} />
                         Background Color
                     </div>
                     <div className="qig-l-radios__wrapper">
                        <input type="color" name="text-color" onChange={this.updateTextColor} value={this.state.textColor} />
                        Text Color
                     </div>
                  </div>
                  <br />

                  <div className="qig-l-wrapper__form-multi">
                     <div>
                        <p className="qig-p--short-label">Text Alignment</p>
                        <RadioItems allItems={this.allAlignments} selected={this.state.alignment} updateSection={this.updateAlignment} />
                     </div>

                     <div>
                        <p className="qig-p--short-label">Text Styling</p>
                        <RadioItems allItems={this.allFontStyles} selected={this.state.fontStyle} updateSection={this.updateFontStyle} />
                     </div>
                  </div>

                  <br />

                  <div className="qig-l-wrapper__form-multi">
                     <label>
                       Font size:
                       <input type="number" name="size" value={this.state.size} onChange={this.updateSize} />
                     </label>

                     <label>
                         Font Family:

                         <select value={this.state.fontFamily} onChange={this.updateFontFamily}>
                           {this.allFontFamilies.map(fontFamily => <option value={fontFamily}>{fontFamily}</option>)}
                         </select>
                     </label>
                  </div>
                  <br />
                  <br />

                  <h5 className="qig-l-wrapper__form-subheader">
                     Preset Color Palettes
                  </h5>

                  <div>
                     {this.allColorSchemes.map(color => {
                        const styles = {
                           'backgroundColor': color.values.bgColor,
                           'color': color.values.color,
                           'fontFamily': color.values.fontFamily
                        };

                        return (
                          <button
                             style={styles}
                             className="qig-button--right-space"
                             onClick={() => this.updateColorScheme(color.label)}>
                              {color.label.toUpperCase()}
                          </button>
                        )
                      })}
                  </div>
               </div>

               <div className="qig-l-wrapper__form-item qig-l-controls__position">
                  <h4 className="qig-l-wrapper__form-header">
                     Change the Quote's Position
                  </h4>
                  <RadioItems allItems={this.allSections} selected={this.state.section} updateSection={this.updateSection} />
               </div>

               <div className="qig-l-wrapper__form-item">
                  <h4 className="qig-l-wrapper__form-header">
                     Restyle the Image
                  </h4>
                  <RadioItems allItems={this.allFilters} selected={this.state.filters} updateSection={this.updateFilters} type="checkbox" />
               </div>

               <div className="qig-l-wrapper__form-item qig-l-controls__image-pos">
                  <h4 className="qig-l-wrapper__form-header">
                     Change the Image Alignment
                  </h4>
                  <p>
                     Based on the image's size, one of these alignments won't change the image.
                  </p>
                  <div className="qig-l-wrapper__form-multi">
                     <div>
                        <p className="qig-p--short-label">Horizontal</p>
                        <RadioItems allItems={this.allPosX} selected={this.state.posX} updateSection={this.updatePosX} />
                     </div>

                     <div>
                        <p className="qig-p--short-label">Vertical</p>
                        <RadioItems allItems={this.allPosY} selected={this.state.posY} updateSection={this.updatePosY} />
                     </div>
                  </div>
               </div>
            </div>

            <div className="qig-l-wrapper__result">
               <div className="qig-l-wrapper__randomize">
                  <button className="qig-button--full" onClick={this.refreshAll}>
                     Randomize All!
                  </button>
               </div>
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
            </div>
         </div>
      );
   }
}

export default QuoteWrapper;
