import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import {colorState} from './../recoil-states/recoil-color';

export default function Button({ OnClick }) {
  const setColor=useSetRecoilState(colorState)
  
  // const [isBlue, setColor] = useRecoilState(colorState);

  function handleClick() {
    setColor((color)=>!color)
    
    // setColor(!isBlue);
    // console.log(isBlue)
  }
  return <button onClick={handleClick}>Change color</button>;
}
