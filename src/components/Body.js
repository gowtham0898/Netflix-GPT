import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();

    // creates different path so array of router
    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ]); 

    useEffect(() => {
        const auth = getAuth(app);
        // calles everytime when sign in or sign out
        onAuthStateChanged(auth, (user) => {
            console.log("auth",user);
            
          if (user) {
            // user is signed in
            const {uid,displayName,email} = user;
            dispatch(addUser({uid: uid,displayName:displayName,email:email}));
          } else {
            // User is signed out
            dispatch(removeUser());
          }
        });
    },[])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body