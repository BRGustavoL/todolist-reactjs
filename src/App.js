import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './pages/TodoList'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <TodoList></TodoList>
    </div>
  );
}
export default App;
