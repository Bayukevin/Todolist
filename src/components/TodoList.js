import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editTodo, toggleTodo } from '../actions/todoActions';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TodoList = ({ todos, deleteTodo, editTodo, toggleTodo }) => {
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleEdit = (id, newText) => {
    editTodo(id, newText);
  };

  const handleToggle = (id) => {
    toggleTodo(id);
  };

  return (
    <ul style={{ listStyle: "none" }}>
      {todos.map(todo => (
        <li key={todo.id} style={{ border: "1px solid #aeaeae", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <input
            style={{ margin: 10, fontSize: 20 }}
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? "line-through" : "none", color: todo.completed ? "#526D82" : "inherit", fontWeight: 500, }}>
            {todo.text}
          </span>
          <div>
            <FaEdit
              style={{ cursor: "pointer", margin: 10, fontSize: 20, color: "#526D82" }}
              onClick={() => handleEdit(todo.id, prompt('Enter new text', todo.text))}
            />
            <FaTrash
              style={{ cursor: "pointer", margin: 10, fontSize: 20, color: "#526D82" }}
              onClick={() => handleDelete(todo.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { todos } = state.todo;
  const { filter } = state.filter;

  let filteredTodos = todos;
  if (filter === 'active') {
    filteredTodos = todos.filter(todo => !todo.completed);
  } else if (filter === 'complete') {
    filteredTodos = todos.filter(todo => todo.completed);
  }

  return {
    todos: filteredTodos
  };
};

export default connect(mapStateToProps, { deleteTodo, editTodo, toggleTodo })(TodoList);
