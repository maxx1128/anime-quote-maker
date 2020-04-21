import React from "react";
import TagItem from "./TagItem";

class Tags extends React.Component {
  state = {
    'tags': '',
    'tagField': ''
  }

  tagsArray = () => this.props.tags.split(',').filter(tag => tag.length > 0);
  typeNewTag = (e) => this.setState({ tagField: e.target.value });
  updateTags = (newTags) => {
    this.setState({ tags: newTags });
    this.props.update(newTags);
    this.props.refresh(newTags);
  }

  addNewTag = () => {
    const newTags = `${this.props.tags}${this.props.tags.length > 0 ? ',' : ''}${this.state.tagField.replace(' ', '_')}`;

    this.setState({ 'tagField': '' });
    this.updateTags(newTags);
  }

  flipIncludedStateFor = (tag) => {
    const newTags = this.tagsArray().map(arrayTag => {
      if (tag === arrayTag) {
        const isExcluded = tag.charAt(0) === '-';
        return isExcluded ? arrayTag.substring(1) : `-${arrayTag}`;
      } else {
        return arrayTag;
      }
    }).join(',');

    this.updateTags(newTags);
  }

  deleteTag = (tag) => {
    const newTags = this.tagsArray()
                      .filter(arrayTag => arrayTag !== tag)
                      .join(',');

    this.updateTags(newTags);
  }

  tagInputKeyPress = () => {
    if (event.key === "Enter") { this.addNewTag(); }
  }

  render() {
    return (
      <div>
        <label>
          New Tag:
          <input className="qig-button--right-space" type="text" name="tags" value={this.state.tagField} onKeyPress={this.tagInputKeyPress} onChange={this.typeNewTag} />
          <button className="qig-button--right-space" onClick={this.addNewTag}>Add Tag</button>
        </label>

        <button className="qig-button--right-space" onClick={() => this.props.refresh(this.props.tags)}>
          Refresh Image
        </button>

        <button onClick={() => this.props.random()}>
          Get Random Tags!
        </button>

        <br />
        <br />

        <ul className="qig__tags-list">
          { this.tagsArray().map((tag, i) => <TagItem key={i} title={tag} flipIncludedState={() => this.flipIncludedStateFor(tag)} deleteTag={() => this.deleteTag(tag)} />) }
        </ul>
      </div>
    )
  }
}

export default Tags;
