import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
 import {app} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignInForm, SetisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();

  const toggleSignInform = () => {
    SetisSignInForm(!isSignInForm);
  };
  const handelSignInButtonClick = () => {
    const refEmail = email.current.value;
    const refPassword = password.current.value;
    //console.log(name);
    
    const refName = name.current !== null ? name.current.value : name;
    const message = Validate(refEmail, refPassword,isSignInForm,refName);

    setErrorMessage(message);
  };

  const handleGoogleSignInButtonClick =  async() => {
    
    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();
   
  try {
        const result = await signInWithPopup(auth, provider);
       
        const user = result.user;
        navigate("/browse")

      } catch (error) {
     
        navigate("/")
        setErrorMessage(error.message);
      }
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute  bg-black w-3/12 p-12 my-40 m-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Username"
            className="p-4 my-2 w-full bg-gray-800 rounded-sm"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email or mobile number"
          className="p-4 my-2 w-full bg-gray-800 rounded-sm"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-sm"
        />
        {errorMessage && <p className="p-2 text-sm text-red-500 font-bold">{errorMessage}</p>}
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handelSignInButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <button
          className="p-4 my-4 bg-blue-500 w-full rounded-lg"
          onClick={handleGoogleSignInButtonClick} // Google sign-in will be handled here
        >
          Sign In with Google
        </button>
        {isSignInForm && (
          <p className="text-gray-400 py-4">
            New to Netflix?{" "}
            <span
              className="font-bold text-white cursor-pointer underline"
              onClick={toggleSignInform}>
              Sign up now.
            </span>
          </p>
        )}
        {!isSignInForm && (
          <p className="text-gray-400 py-4">
            Already registered?{" "}
            <span
              className="font-bold text-white cursor-pointer underline"
              onClick={toggleSignInform}>
              Sign in now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
