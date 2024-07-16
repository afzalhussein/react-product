import React from "react";

import "./Auth.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const Auth = () => {
  const dispatch = useDispatch()
  const handleSubmit = ( e ) => {
    e.preventDefault();
    //  dispatch action 
    dispatch(authActions.login({}))
   }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <LabeledInput id="id" name="id" label="Id" type="text" ></LabeledInput>
        <LabeledInput type="password" label="Password" name="password" id="password"></LabeledInput>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;

function LabeledInput ({id, name, label, type}) {
  return ( <>
    <label htmlFor={id}>{label}</label>
    <input type="text" name={name} id={id} />
  </>

  )
}