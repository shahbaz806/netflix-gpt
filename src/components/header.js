import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";


const Header = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleButtonClickSignOut = () => {
    // Add your button click logic here
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Navigate("/");
      })
      .catch((error) => {
        // An error happened.
        Navigate("/error");
      });
  };

  useEffect(() => {
   const unSubcribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        Navigate("/Browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        Navigate("/");
      }
    });
    return () => unSubcribe();
  }, []);
   
  return (
    <div className=" flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-40"
        src= {LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 rounded-full"
            alt="logo"
            src={user?.photoURL}
          />
          <button
            className="font-bold text-white"
            onClick={handleButtonClickSignOut}
          >
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
