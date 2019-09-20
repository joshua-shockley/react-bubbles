import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LoginF from "./components/LoginF";
import "./styles.scss";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import {withRouter} from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth';


function App() {
  const [colorList, setColorList] = useState([]);
  const [flag, setFlag] = useState(false)
  // useEffect(()=> {
  //   axiosWithAuth()
  //   .get('/colors')
  //   .then(res => {
  //     console.log(res.data);
  //     setColorList(res.data);
  //   })
  //   .catch(err => console.log(err));
  // },[]);
  // // set that data to the colorList state property

const handleFlag = () => {
  setFlag(!flag);
}

  return (
      <div className="App">
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
          <PrivateRoute exact path="/bubblePage" 
          // render={props => {
          //   return <BubblePage handleFlag={handleFlag}/>}}
            component={BubblePage} 
            />
          <Route exact path="/" component={LoginF} />

        </Switch>
      </div>
  );
}

export default withRouter(App) ;
