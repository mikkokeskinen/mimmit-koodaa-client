import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    category: PropTypes.number,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool,
    categories: PropTypes.array.isRequired,
  };

  state = {
    text: this.props.text || '',
    category: this.props.category || '',
  };

  handleSubmit = e => {
    const text = e.target.value.trim();
    const category = parseInt(this.state.category);

    if (e.which === 13) {
      this.props.onSave(text, category);
      if (this.props.newTodo) {
        this.setState({ text: '', category: '' })
      }
    }
  };

  handleTextChange = e => {
    this.setState({ text: e.target.value })
  };

/*
  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  };
*/

  handleCategoryChange = e => {
    this.setState({category: e.target.value})
  };

  render() {
    return (
      <span>
        <input className={
          classnames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo
          })}
          type="text"
          placeholder={this.props.placeholder}
          autoFocus={true}
          value={this.state.text}
          // onBlur={this.handleBlur}
          onChange={this.handleTextChange}
          onKeyDown={this.handleSubmit} />

        <select className="category-select" onChange={this.handleCategoryChange} value={this.state.category}>
          <option>Category...</option>
          {this.props.categories.map(cat => {
            return (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            );
          })}
        </select>
      </span>
    )
  }
}
