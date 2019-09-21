import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { getColors } from '../actions/index.js';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const BubblePage = props => {

  console.log(props);
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
const colorArray = props.state.colors;
console.log(colorArray);

// console.log(props);
//   useEffect(()=> {
//     axiosWithAuth()
//     .get('/colors')
//     .then(res => {
//       console.log(res.data);
//       setColorList(res.data);
//     })
//     .catch(err => console.log(err));
//   },[]);
  // // set that data to the colorList state property

  return (
    <>
      {/* <header>
        <h2>want some color in your life?</h2>
      </header> */}
      <ColorList {...props} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

const mapStateToProps = state => {
return {
  state
};
};

export default connect(mapStateToProps,{getColors})(BubblePage);
