import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { useStateValue } from "../../DataLayer/StateProvider";
import { auth, provider } from "../../Config/firebase";
import { actionType } from "../../DataLayer/reducer";
const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIn = e => {
    e.preventDefault();
    //   before this enable the authentication in your firebase and select the google //method

    // signin with the auth protocol
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({
          // dispatches the data into data layer after login
          type: actionType.SET_USER,
          user: result.user
        });
      })
      .catch(err => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-logo-2012.png"
          alt="logo"
        />
        <div className="login__text">
          <h1>Sign in to Twitter</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
