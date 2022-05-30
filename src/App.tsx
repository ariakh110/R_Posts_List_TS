import React from 'react';
import './App.css';
import * as api from './api/API';

function App() {
  console.log(api.getPosts());

  return (
    <div className="App">
      <h1> hello world</h1>
    </div>
  );
}

export default App;
