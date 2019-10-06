import React,{useState} from 'react';
import './App.css';

import Person from './Person/Person'
import './Person/Person.css'
function App() {
  
  const [state, setState] = useState({persons:[{name: "Pritesh", age:"28"}]});
  const switchNameHandler = () => {
    if (state.persons[0].age === "28"){
    setState({...state, persons:[{name: "New Pritesh", age:"29"}]})
    }else{
      setState({...state, persons:[{name: "Pritesh", age:"28"}]})
    }
  } 
  return (
    <div className="App">
     <h1>Hi</h1>
     <Person name={state.persons[0].age} age={state.persons[0].name}/>
     <Person name="Other Person" age="30"> Other Text </Person>
     <button onClick={switchNameHandler}>Switch Name</button>
    </div>
  );
}

export default App;
