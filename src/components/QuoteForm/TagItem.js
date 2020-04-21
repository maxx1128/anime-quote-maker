import React from "react";

const TagItem = ({ title, flipIncludedState, deleteTag }) => {
  const isExcluded = title.charAt(0) === '-';

  return (
    <li className="qig__tag-item">
      <span className={`qig__tag-title qig__tag-title--${isExcluded ? 'excluded' : 'included'}`}>
        {title.replace('_', ' ').replace('-', '')}
      </span>

      <button className={`qig__tag-button qig__tag-state qig__tag-state--${isExcluded ? 'make-included' : 'make-excluded'}`} onClick={() => flipIncludedState(title)}>
        {isExcluded ? '+' : '-'} <span className="qig__screenreader">{isExcluded ? 'Include' : 'Exclude'} Tag</span>
      </button>

      <button className="qig__tag-button qig__tag-delete" onClick={() => deleteTag(title)}>
        X <span className="qig__screenreader">Delete Tag</span>
      </button>
    </li>
  )
};

export default TagItem;
