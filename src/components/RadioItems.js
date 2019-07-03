import React from "react";

const RadioItems = ({ allItems, updateSection, selected, type = 'radio'}) => (
   <div className="qig-l-radios__wrapper">
      {
         allItems.map((item,i) =>
            <label className="qig-l-radios__item" key={i}>
               <input
                  type={type}
                  onChange={() => updateSection(item.value)}
                  value={item.value}
                  checked={selected === item.value || selected.includes(item.value)}
               />
               {item.label}
            </label>
         )
      }
   </div>
);

export default RadioItems;
