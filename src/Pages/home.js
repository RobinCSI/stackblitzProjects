import React, { Fragment, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { taskListAtom } from './../recoil-data/recoil-tasks';
import { v4 as uuid } from 'uuid';

export default function Home() {
  const [task, setTask] = useState('');
  const setTasks = useSetRecoilState(taskListAtom);
  const navigate = useNavigate();

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleAdd() {
    setTasks((oldTasks) => [...oldTasks, { id: uuid(), taskName: task }]);
    setTask('');
  }

  function handleCheck() {
    navigate('/Tasks');
  }

  return (
    <Fragment>
      <input value={task} onChange={handleChange} />
      <pre></pre>
      <button onClick={handleAdd}>Add task</button>
      <button onClick={handleCheck}>Check tasks</button>
    </Fragment>
  );
}
