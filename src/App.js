import React from 'react';
import './App.css';
import AddTodo from './components/AddToDo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';

function App() {
  return (
    <div className="App">
      <h1>Todo List - WITH REDUX!!</h1>
      <h2>Take one with React + Redux</h2>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

export default App;
