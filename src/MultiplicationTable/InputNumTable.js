import React, { Fragment, useState } from 'react';

export default function InputNumTable() {
  const [num, setNum] = useState();
  let table = [],
    i;
  for (i = 1; i <= 50; i++) {
    table.push(i * num);
  }

  function assignNum(e) {
    setNum(e.target.value);
  }

  return (
    <Fragment>
      <label>Input any number to get its multiplication table: <input type="text" onChange={assignNum} /></label>
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

// {
//   "1": [
//     "create state ,store number , Generate table ",
//     "cerate a button , update state with random value, update table"
//   ],

//   "2": [
//     "create a h1",
//     "create a h2",
//     "create a div",
//     "manage state to track that when user mouse overed on the h1 and when mouse out with date and time",
//     "create a html table to show the logs.",
//     [
//       { "time": "", "eventName": "out or in" },
//       { "time": "", "eventName": "out or in" }
//     ]
//   ],
//   "3": [
//     "create an array with multiple greetings",
//     "create a button and handle click on button ",
//     "show the next greeting message on h1"
//   ]
// }
