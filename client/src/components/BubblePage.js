import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const BubblePage = (props) => {

  const [colorList, setColorList] = useState([]);

  const [flag, setFlag] = useState(false);
console.log(flag);
  const flagChange = ()=> {
    setFlag(!flag);
    axiosWithAuth()
    .get('colors')
    .then(res => {
      setColorList(res.data);
    })
    .catch(err => {
      console.log(err.response);
    });

  };
  // fetch your colors data from the server when the component mounts
// const colorArray = props.state.colors;
// console.log(colorArray);

  useEffect(()=> {
    axiosWithAuth()
    .get('/colors')
    .then(res => {
      console.log(res.data);
      setColorList(res.data);
    })
    .catch(err => console.log(err));
  },[]);
  // set that data to the colorList state property

  return (
    <>
      {/* <header>
        <h2>want some color in your life?</h2>
      </header> */}
      <ColorList {...props} flagChange={flagChange} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

