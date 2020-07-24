import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import "assets/scss/style.scss"
import Register from 'pages/Register';
import Login from 'pages/Login';



function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Redirect to="/register" ></Redirect>
        </Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
      </Router>
    </div>
  );
}

export default App;
