import React from 'react';


export const ColorProvider = () =>{
return(
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
    
);
}