import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

const App = ({ apiBaseUrl }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
      </header>
      <main>
        <TaskForm apiBaseUrl={apiBaseUrl} />
        <TaskList apiBaseUrl={apiBaseUrl} />
      </main>
    </div>
  );
};

export default App;
