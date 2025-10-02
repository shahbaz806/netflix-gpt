import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [user, setUser] = useState(null);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSerach = () => {
    dispatch(toggleGptSearchView());
  };

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
    const unSubcribe = onAuthStateChanged(auth, (user) => {
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

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className=" justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row">
      <img className="w-40 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white rounded-lg"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((Lang) => (
                <option key={Lang.identifier} value={Lang.identifier}>
                  {Lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="font-bold py-2 bg-blue-600 px-4 text-white rounded-lg m-2 mx-4 my-2"
            onClick={handleGptSerach}
          >
            {showGptSearch ? "Homepage" : " GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12 rounded-full"
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
