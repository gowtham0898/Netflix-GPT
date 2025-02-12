import React, { useEffect } from 'react'
import Login from '../pages/Login/Login'
import Browse from '../pages/Browse/Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
  

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

   
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body