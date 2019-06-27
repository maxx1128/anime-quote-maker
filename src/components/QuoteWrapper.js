import React from "react";
import axios from "axios";

import QuoteBox from "./QuoteBox";
import RadioItems from "./RadioItems";

class QuoteWrapper extends React.Component {
   state = {
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

   allTags = ['absurdres', 'scenery', 'library', 'city', 'space', 'thinking', 'sad', 'happy', 'forest', 'military', 'city', 'singing', 'running', 'heart', 'pokemon', 'animal', 'ponytail', 'jacket', 'goggles', 'weapon', 'skateboard']

   allSections = [
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

   allAlignments = [
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

   allPosX = [
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

   allPosY = [
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

   allFontStyles = [
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

   allFontFamilies = ['Open Sans', 'Archivo Black', 'Abril Fatface', 'Dosis', 'Cabin Sketch', 'Raleway', 'Space Mono', 'Montserrat', 'Roboto Slab', 'Poppins', 'PT Serif', 'Dancing Script'].sort()

   allColorSchemes = [
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

   allFilters = [
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
   ]

   componentDidMount() {
      this.refreshAll();
   }

   getQuote = () => {
      axios.get('https://favqs.com/api/qotd').then(data => {
         const { body } = data.data.quote;

         this.setState({
            quote: body
         })
      });
   }

   updateFilters = (newFilterVal) => {
      let { filters } = this.state;

      filters.includes(newFilterVal)
         ? filters.splice(filters.indexOf(newFilterVal), 1)
         : filters.push(newFilterVal);

      this.setState({
         filters: filters
      });
   }

   emptyFilters = () => {
      this.state.filters.forEach(filter => {
         this.updateFilters(filter);
      });
   }

   updateSection = (section) => {
      this.setState({
         section: section
      });
   }

   updateAlignment = (alignment) => {
      this.setState({
         alignment: alignment
      });
   }

   updatePosX = (posX) => {
      this.setState({
         posX: posX
      });
   }

   updatePosY = (posY) => {
      this.setState({
         posY: posY
      });
   }

   updateQuote = (e) => {
      this.setState({
         quote: e.target.value
      })
   }

   updateBgColor = (e) => {
      this.setState({
         bgColor: e.target.value
      })
   }

   updateTextColor = (e) => {
      this.setState({
         textColor: e.target.value
      })
   }

   updateStyle = (style) => {
      this.setState({
         style: style
      })
   }

   updateFontStyle = (fontStyle) => {
      this.setState({
         fontStyle: fontStyle
      })
   }

   updateFontFamily = (e) => {
      this.setState({
         fontFamily: e.target.value
      })
   }

   updateTags = (e) => {
      this.setState({
         tags: e.target.value
      });
   }

   updateSize = (e) => {
      this.setState({
         size: e.target.value
      });
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

   randomProperty = (array) => array[Math.floor(Math.random()*array.length)]

   randomizeFontSize = () => {
      const number = Math.floor(Math.random() * (30 - 20) + 20)
      this.setState({
         size: number
      })
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
      this.setState({
         fontFamily: randomFamily
      })
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
      // this.updatePosX(this.randomProperty(this.allPosX).value)
      // this.updatePosY(this.randomProperty(this.allPosY).value)
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
               <div className="qig-l-wrapper__form-item qig-l-controls__tags">
                  <h2>
                     Make An Anime Quote Image!
                  </h2>

                  <h4 className="qig-l-wrapper__form-header">
                    Change the Image Tags
                 </h4>
                  <p>
                     Each tag should be <strong>comma-separated without spaces</strong>. Tags with multiple words should <strong>replace spaces with underscores.</strong> There's lots of potential tags, so try locations, items, characters, types of clothing, games, and more!
                  </p>
                  <p>
                     Can't decide? Leave it blank for something totally random!
                  </p>
                 <label>
                   Tags:
                   <input type="text" name="tags" value={this.state.tags} onChange={this.updateTags} />
                 </label>

                  <br />
                  <br />

                 <button className="qig-button--right-space" onClick={() => this.refreshImage(this.state.tags)}>
                   Try Another Image
                 </button>

                 <button onClick={() => this.randomizeImage()}>
                   Get a Random Tag
                 </button>
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
                           'background-color': color.values.bgColor,
                           'color': color.values.color,
                           'font-family': color.values.fontFamily
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
                  posX={this.state.posX}
                  posY={this.state.posY} />
            </div>
         </div>
      );
   }
}

export default QuoteWrapper;
