import React from 'react';
import { useRecoilValue } from 'recoil';

import {colorState} from './../recoil-states/recoil-color';

export default function Header() {
  const isBlue = useRecoilValue(colorState);

  return (
    <h1 style={isBlue ? { color: 'blue' } : { color: 'red' }}>
      Hi, I change color between red and blue on the click of a button
    </h1>
  );
}
