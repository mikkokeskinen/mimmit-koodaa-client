import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
  };

  render() {
    const {addTodo, categories} = this.props;

    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          newTodo
          onSave={(text, category) => {
            if (text.length !== 0) {
              addTodo(text, category)
            }
          }}
          categories={categories}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}
