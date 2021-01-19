import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Radium from 'radium';
import {Route,Switch} from 'react-router-dom';
import Landing from './Containers/Landing/Landing';
import WebDoctor from './Containers/WebDoctor/WebDoctor';
import Login from './Containers/Login/Login';
import Pricing from './Containers/Pricing/Pricing';
import CheckOut from './Containers/CheckOut/CheckOut';
import Profile from './Containers/Profile/profile';
import Admin from './Containers/Admin/Admin';
function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/webdoctor" exact component={WebDoctor}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/pricing" exact component={Pricing}/>
        <Route path="/checkout" exact component={CheckOut}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/admin" exact component={Admin}/>
      </Switch>
    
    </div>
  );
}

export default Radium(App);
