import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-4">What's the plan for today?</h1>
      <div className="d-flex align-items-center justify-content-center">
        <div className="card mt-4">
          <div className="card-body">
            <TodoForm />
            <TodoFilter />
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
