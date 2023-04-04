import React, { Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import { taskListAtom } from './../recoil-data/recoil-tasks';
import { useNavigate } from 'react-router-dom';

export default function Tasks() {
  const tasksList = useRecoilValue(taskListAtom);
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <Fragment>
      <h2>Tasks to do !</h2>
      <ul>
        {tasksList.map((task) => (
          <li>{task.taskName}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Go back to adding task</button>
    </Fragment>
  );
}
