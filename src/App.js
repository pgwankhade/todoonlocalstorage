import Register from './Register'
import LogIn from './LogIn'
import Todo from './Todo'
import './App.css';
import { useState } from 'react';

function App() {

  const[rout,setRout]=useState()
  
  return (
    <div className="App">
     <Todo/>
     <Register/>
     <LogIn/>
    </div>
  );
}

export default App;
