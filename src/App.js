import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
function App() {
  return (
    <div>
      <Header></Header>
      <div className="container"><Main></Main></div>
    </div>
  );
}

export default App;
