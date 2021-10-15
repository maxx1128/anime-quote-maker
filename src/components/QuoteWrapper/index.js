import React from "react";

import { update } from "./update";
import { random } from "./random";
import { reset } from "./reset";
import { toggle } from "./toggle";
import { get } from "./get";
import { getQuote } from "./getQuote";

import QuoteBox from "../QuoteBox";
import { defaultState } from "./state";

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

   componentDidMount() { this.refreshAll(); }

   get = () => get(this.state);
   update = () => update(this);
   random = () => random(this.update);
   reset = () => reset(this.update);
   toggle = () => toggle(this.update, this.state);

   getQuote = (set) => getQuote(this.update, this.random, set)
   refreshAll = () => this.reset().all(this.getQuote, this.random)

   render() {
      return (
         <div className={`qig-l-wrapper ${this.state.vertical ? 'qig-l-wrapper--vertical' : ''}`}>
            <div className="qig-l-wrapper__form">
               <Intro />

               <Tags
                  tags={this.state.tags}
                  update={this.update().tags}
                  refresh={this.reset().image}
                  random={this.random().tags}/>

               <Size
                  state={this.state}
                  update={this.update} />

               <CustomImage
                  url={this.state.customImageUrl}
                  updateUrl={this.update().customImageUrl}/>

               <Alignment
                  state={this.state}
                  update={this.update} />

               <Quote
                  quote={this.state.quote}
                  update={this.update().quote}
                  getQuote={this.getQuote}/>

               <Position
                  state={this.state}
                  update={this.update} />

               <Shape
                  state={this.state}
                  update={this.update} />

               <Styling
                  state={this.state}
                  update={this.update}
                  random={this.random}
                  toggle={this.toggle} />

               <Filters
                  state={this.state}
                  update={this.update}
                  random={this.random} />

               <Transform
                  state={this.state}
                  update={this.update}
                  reset={this.reset} />

               <Perspective
                  state={this.state}
                  update={this.update}
                  reset={this.reset} />

               <button className="qig-button--full" onClick={this.toggle().verticalMode}>
                 {this.state.vertical ? 'Horizontal' : 'Vertical'} View
               </button>
               <br/>
            </div>

            <div className="qig-l-wrapper__result">
               <QuoteBox
                  get={this.get()}
                  state={this.state} />

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
