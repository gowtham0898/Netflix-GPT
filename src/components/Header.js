import { getAuth,signOut,onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { app } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants'
import Cookies from 'js-cookie';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLogin,setLogin] = useState(false);

    const user = useSelector((store)=> store.user );

    useEffect(()=>{
   const token =    Cookies.get('authToken');
      
   if (token) {
    setLogin(true);
    navigate("/browse");
  }else{
    navigate("/")
  }
    },[])
  //   useEffect(() => {
  //     const auth = getAuth(app);
  //     // calles everytime when sign in or sign out
  //    const unsubscribe =  onAuthStateChanged(auth, (user) => {
       
          
  //       if (user) {
  //         const {uid,displayName,email} = user;
  //         dispatch(addUser({uid: uid,displayName:displayName,email:email}));
  //         navigate("/browse")
  //       } else {
  //         // User is signed out
  //         dispatch(removeUser());
  //         navigate("/")
  //       }
  //     });
  //     //unsubscrie will call then component unmouts
  //     return () => unsubscribe();

  // },[])

    const handleSignOut = () => {
      Cookies.remove('authToken');
      navigate("/");

        // const auth = getAuth(app);
        // signOut(auth).then(() => {
          
        // }).catch((error) => { });
          
    }
  return (
    <div className="absolute w-full px-4 py-2 bg-gradient-to-b from-black z-40 flex justify-between items-center">
      <img
        className="w-44"
      src={LOGO}
        alt="netflix-logo"
      />
      {isLogin && (
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