import { useRef, useState } from "react";
import React from "react";
import Header from "./header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTO_URL,BACKGROUND_IMG } from "../utils/constant";


const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setSignIn(!signIn);
  };

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current?.value || null
    );
    setErrorMessage(message);

    if (message) return;

    // sign In sign Up logic here
    if (!signIn) {
      // sign In logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: PHOTO_URL

          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/Browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // console.log(user);
          // navigate("/Browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // sign Up logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/Browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="">
      <Header />
      <div>
        <img
          className="absolute"
          alt="background-img"
          src= {BACKGROUND_IMG}
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-14 w-4/12 rounded-2xl shadow-white bg-black my-36 mx-auto right-0 left-0 bg-opacity-70"
      >
        <h1 className="text-3xl font-bold text-white py-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-3 w-full  bg-gray-700 rounded-lg opacity-80 border border-white"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-2 my-3 w-full bg-gray-700 rounded-lg opacity-80 border border-white"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-3 w-full bg-gray-700 rounded-lg opacity-80 border border-white"
        ></input>
        <p className="text-red-500 font-bold text-lg p-2 ">{errorMessage}</p>
        <button
          className="p-3 my-3 bg-red-900 font-bold w-full rounded-lg text-white"
          onClick={handleButtonClick}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white py-2 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {signIn
            ? "new to Netflix?Sign Up Now"
            : "Already registered? Sign In Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;
