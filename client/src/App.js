import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LoginF from "./components/LoginF";
import "./styles.scss";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import {withRouter} from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth';


//  export const ColorContext = createContext();

//   export const ColorProvider = (props) =>{
//     // const [colorList, setColorList] = useState([]);
//     const [flag, setFlag] = useState(false)
//     return(
//       <ColorContext.Provider value={[flag,setFlag]}>
//         {props.children}
//       </ColorContext.Provider>
//   );
    // };


function App() {
  const [colorList, setColorList] = useState([]);


 
  return (
      <div className="App">
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
          <PrivateRoute exact path="/bubblePage" 
          // render= {props => {
          //   return <BubblePage {...props}/>}}
            component={BubblePage} 
            />
          <Route exact path="/" component={LoginF} />

        </Switch>
      </div>
  );
}

export default withRouter(App) ;
