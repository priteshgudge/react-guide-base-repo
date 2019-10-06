import React from 'react';
import './App.css';

import Person from './Person/Person'

function App() {
  return (
    <div className="App">
     <h1>Hi</h1>
     <Person name="Pritesh" age="28"/>
     <Person name="Other Person" age="30"> Other Text </Person>
    </div>
  );
}

export default App;
