import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from './Register'
import LogIn from './LogIn'
import Todo from './Todo'
import './App.css';
import { useState } from 'react';

function App() {

  const[route,setRoute]=useState('signin')

 const onRouteChange = (route) => {
    setRoute(route);
  } 
  
  return (
    <Router>
    { route === 'home'?
       <div>
             <Todo/>
        </div>  
        :(
          <div>

             <Route path='/register' component={()=><Register onRouteChange={onRouteChange}/>} />    
             <Route path='/' exact component={()=><LogIn onRouteChange={onRouteChange} />} />
            
          </div>
        )
    }
  </Router>
  );
}

export default App;
