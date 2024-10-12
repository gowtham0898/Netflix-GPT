import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,SetisSignInForm] = useState(true);

     const toggleSignInform = () =>{
        SetisSignInForm(!isSignInForm);
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
      <form className="absolute  bg-black w-3/12 p-12 my-40 m-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Username"
            className="p-4 my-2 w-full bg-gray-800 rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-2 w-full bg-gray-800 rounded-sm"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-sm"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
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
}

export default Login