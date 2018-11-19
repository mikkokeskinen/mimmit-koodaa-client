import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

export default class MainSection extends Component {
  static propTypes = {
    todosCount: PropTypes.number.isRequired,
    completedCount: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.getCategories();
    this.props.actions.getTodos();
  }

  render() {
    const {todosCount, completedCount, actions} = this.props;

    return (
      <section className="main">
{/*
        {
          !!todosCount &&
          <span>
              <input
                className="toggle-all"
                type="checkbox"
                checked={completedCount === todosCount}
                readOnly
              />
              <label onClick={actions.completeAllTodos} />
            </span>
        }
*/}
        <VisibleTodoList />
        {
          !!todosCount &&
          <Footer
            completedCount={completedCount}
            activeCount={todosCount - completedCount}
            onClearCompleted={actions.clearCompleted}
          />
        }
      </section>
    );
  }
}
