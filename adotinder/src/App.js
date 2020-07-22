import React from 'react';
import './App.css';
import Home from './Components/Home/Home'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
