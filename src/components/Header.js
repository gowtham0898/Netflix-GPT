import { getAuth,signOut } from 'firebase/auth'
import React from 'react'
import { app } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const navigate = useNavigate();

    const user = useSelector((store)=> store.user );

    const handleSignOut = () => {
        const auth = getAuth(app);
        signOut(auth).then(() => {
           navigate("/");
          }).catch((error) => {
            navigate("/error");
          });
          
    }
  return (
    <div className="absolute w-full px-4 py-2 bg-gradient-to-b from-black z-40 flex justify-between items-center">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      {user && (
        <div>
          <button
            className="mr-3 font-bold rounded border-black p-2 bg-red-700 text-white hover:bg-white hover:text-red-700"
            onClick={handleSignOut}>
            sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header