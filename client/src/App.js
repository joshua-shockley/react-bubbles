import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LoginF from "./components/LoginF";
import "./styles.scss";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import {withRouter} from 'react-router-dom';


function App() {


  return (
      <div className="App">
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
          <PrivateRoute exact path="/bubblePage" 
            component={BubblePage} 
            />
          <Route exact path="/" component={LoginF} />

        </Switch>
      </div>
  );
}

export default withRouter(App) ;
