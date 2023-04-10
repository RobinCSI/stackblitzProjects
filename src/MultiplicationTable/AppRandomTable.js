import React, { Fragment, useState } from 'react';

export default function AppRandomTable() {
  const [num, setNum] = useState();
  let table = [],
    i;
  for (i = 1; i <= 50; i++) {
    table.push(i * num);
  }

  function generateNum() {
    const x=Math.random()*100
    setNum(Math.floor(x));
  }

  return (
    <Fragment>
      <button onClick={generateNum}>Click to get table for a random number</button>
      {num && (
        <div>
          <h3>The table for {num} is </h3>
          {table.map((element, index) => (
            <li>
              {num} x {index + 1} = {element}
            </li>
          ))}
        </div>
      )}
    </Fragment>
  );
}