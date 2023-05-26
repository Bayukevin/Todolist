import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      const newTodo = {
        id: new Date().getTime(),
        text,
        completed: false
      };
      addTodo(newTodo);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display: "flex", justifyContent:"center", marginBottom: 10,}}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit" class="btn btn-primary" style={{marginLeft: 10, borderRadius: 10,}}>Add</button>
    </form>
  );
};

export default connect(null, { addTodo })(TodoForm);
