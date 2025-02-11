import React, { useRef, useState } from "react";
import Header from "../../layout/Header";
import { Validate } from "../../utils/validations/Validate";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../utils/constants/firebase";
import { LOGIN_BACKGROUND } from "../../utils/constants/constants";
import Cookies from "js-cookie";
import { json, useNavigate } from "react-router-dom";

import { API_BASE_URL } from "../../utils/constants/constants";

const Login = () => {
  const [isSignInForm, SetisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInform = () => {
    SetisSignInForm(!isSignInForm);
  };

  const handleSignInButtonClick = async () => {
       
    const refEmail = email.current?.value || "";
    const refPassword = password.current?.value || "";
    const refName = name?.current?.value || "";

    setErrorMessage("");
    if (isSignInForm) {
         
      try {
        // Fetch request to the sign-in endpoint
        const response = await fetch(
          `${API_BASE_URL}Auth/login?username=${refName}&password=${refPassword}`,
          {
            method: "GET",
            headers: {
              Accept: "*/*",
            },
          }
        );

     
        if (response.ok) {
             
          const data = await response.json();
          console.log("Sign-in successful:", data);
          Cookies.set("authToken", data.token, {
            expires: 7,
            secure: true,
            sameSite: "Strict",
          });
          navigate("/browse");
        } else {
          const errorData = await response.json();
          console.error("Sign-in failed:", errorData);
          setErrorMessage("Sign-in failed. Please check your details.");
        }
      } catch (error) {
        console.error("An error occurred during sign-in:", error);
        setErrorMessage("An error occurred. Please try again.");
      }
    } else {
         
      try {
        // Fetch request to the sign-in endpoint
        const response = await fetch(
          `https://localhost:7263/api/Auth/signup`,
          {
            method: "POST",
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json" 
            },
            body: JSON.stringify({
              username: refName,   
              email: refEmail,     
              password: refPassword 
            })
          }
        );

           
        if (response.ok) {
             
          const data = await response.json();
          console.log("Sign-up successful:", data);
          Cookies.set("authToken", data.token, {
            expires: 7,
            secure: true,
            sameSite: "Strict",
          });
          navigate("/browse");
        } else {
          const errorData = await response.json();
          console.error("Sign-in failed:", errorData);
          setErrorMessage("Sign-in failed. Please check your details.");
        }
      } catch (error) {
        console.error("An error occurred during sign-in:", error);
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  // const handleGoogleSignInButtonClick = async () => {
  //   const auth = getAuth(app);

  //   const provider = new GoogleAuthProvider();

  //   try {
  //     await signInWithPopup(auth, provider);
  //   } catch (error) {
  //     setErrorMessage(error.message);
  //   }
  // };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_BACKGROUND} alt="background-image" />
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
            type="text"
            ref={email}
            placeholder="Email or mobile number"
            className="p-4 my-2 w-full bg-gray-800 rounded-sm"
          />
        )}

        <input
          ref={name}
          type="text"
          placeholder="Username"
          className="p-4 my-2 w-full bg-gray-800 rounded-sm"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-sm"
        />
        {errorMessage && (
          <p className="p-2 text-sm text-red-500 font-bold">{errorMessage}</p>
        )}
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleSignInButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {/* <button
          className="p-4 my-4 bg-blue-500 w-full rounded-lg"
          onClick={handleGoogleSignInButtonClick} // Google sign-in will be handled here
        >
          Sign In with Google
        </button> */}
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
