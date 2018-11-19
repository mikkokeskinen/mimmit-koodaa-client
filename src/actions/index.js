import superagent from 'superagent'
import * as types from '../constants/ActionTypes'

const BASE_URL = 'http://localhost:8000/v1/';

export const getTodos = () => {
  return dispatch => {
    return superagent
      .get(`${BASE_URL}todo/`)
      .end((err, res) => {
        if (err) {
          console.log("getTodos error", err);
          dispatch({type: types.GET_TODOS, data: []});
        } else {
          dispatch({type: types.GET_TODOS, data: res.body});
        }
      });
  }
};

export const getCategories = () => {
  return dispatch => {
    return superagent
      .get(`${BASE_URL}category/`)
      .end((err, res) => {
        if (err) {
          console.log("getCategories err", err);
          dispatch({type: types.GET_CATEGORIES, data: []});
        } else {
          dispatch({type: types.GET_CATEGORIES, data: res.body});
        }
      });
  }
};

export const addTodo = (text, category) => {
  return dispatch => {
    return superagent
      .post(`${BASE_URL}todo/`)
      .send({text: text, completed: false, category: category })
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          dispatch({type: types.ADD_TODO, id: res.body.id, text: text, category: category, completed: false});
        }
      });
  }
};

export const deleteTodo = id => {
  return dispatch => {
    return superagent
      .delete(`${BASE_URL}todo/${id}/`)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          dispatch({type: types.DELETE_TODO, id});
        }
      });
  }
};

export const editTodo = (id, text, category) => {
  return dispatch => {
    return superagent
      .patch(`${BASE_URL}todo/${id}/`)
      .send({text: text, category: category})
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          dispatch({type: types.EDIT_TODO, id: id, text: text, category: category});
        }
      });
  }
};

export const completeTodo = (id, state) => {
  return dispatch => {
    return superagent
      .patch(`${BASE_URL}todo/${id}/`)
      .send({completed: state})
      .end((err, res) => dispatch({type: types.COMPLETE_TODO, id: id, completed: state}));
  }
};

// export const addTodo = text => ({type: types.ADD_TODO, text});
// export const deleteTodo = id => ({type: types.DELETE_TODO, id});
// export const editTodo = (id, text, category) => ({type: types.EDIT_TODO, id, text, category});
// export const completeTodo = id => ({type: types.COMPLETE_TODO, id});
// export const completeAllTodos = () => ({type: types.COMPLETE_ALL_TODOS});
// export const clearCompleted = () => ({type: types.CLEAR_COMPLETED});
export const setVisibilityFilter = filter => ({type: types.SET_VISIBILITY_FILTER, filter});
