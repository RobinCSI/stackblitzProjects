import React, { Fragment, useState } from 'react';
import './form.css';
import SocialMediaLogin from './socialMediaLogin';

export default function Form(props) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePwd = (e) => {
    setPwd(e.target.value);
  };

  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    alert('Your sign up details have been submitted');
    setName('');
    setLastName('');
    setEmail('');
    setPwd('');
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    alert('Your login details have been submitted');
    setEmail('');
    setPwd('');
  };

  return (
    <Fragment>
      <form onSubmit={props.newUser ? handleSubmitSignUp : handleSubmitLogin}>
        {props.newUser && (
          <div>
            <label className="label">Your First Name</label>
            <br />
            
            <input className="input"
              type="text"
              value={name}
              onChange={handleChangeName}
              placeholder="John"
            />
            <br />
            <br />

            <label className="label">Your Last Name</label>
            <br />
          
            <input className="input"
              type="text"
              value={lastName}
              onChange={handleChangeLastName}
              placeholder="Doe"
            />
            <br />
            <br />
          </div>
        )}

        <label className="label">Your email</label>
        <br />
        <input className="input"
          type="email"
          value={email}
          onChange={handleChangeEmail}
          placeholder="example@gmail.com"
        />
        <br />
        <br />

        <label className="label" id="pwd">Password</label>
        <br />
        <input className="input" type="password" value={pwd} onChange={handleChangePwd} />
        <br />

        <div className="checkboxForgotPwd">
          <div id="checkbox">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <div id="forgotPwd">Forgot password?</div>
        </div>
        <br />
        <input id="submitButton" type="submit" />
        {/* {props.newUser? <input type="submit"/> : <input type="submit"/>} */}
      </form>
      <SocialMediaLogin newUser={props.newUser} setNewUser={props.setNewUser} />
    </Fragment>
  );
}
