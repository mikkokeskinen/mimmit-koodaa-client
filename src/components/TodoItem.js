import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

const getCategoryName = (id, categories) => {
  for(let cat of categories) {
    if (cat.id === id) {
      return cat.name;
    }
  }
  return '';
};

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
  };

  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({ editing: true })
  };

  handleSave = (id, text, category) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text, parseInt(category))
    }
    this.setState({ editing: false })
  };

  render() {
    const { todo, completeTodo, deleteTodo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       category={todo.category}
                       categories={this.props.categories}
                       editing={this.state.editing}
                       onSave={(text, category) => this.handleSave(todo.id, text, category)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id, !todo.completed)} />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
            {todo.category ? <span className="category">{getCategoryName(todo.category, this.props.categories)}</span> : ''}
          </label>
          <button className="destroy"
                  onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}
