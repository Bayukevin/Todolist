import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO, SET_FILTER } from './types';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const editTodo = (id, updatedText) => {
  return {
    type: EDIT_TODO,
    payload: { id, updatedText }
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter
  };
};
