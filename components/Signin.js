import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import {
  getFirestore,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  collection,
} from "firebase/firestore";
import { parseCookies, setCookie, destroyCookie } from "nookies";

const Signin = () => {
  const db = getFirestore();
  const ColUsers = collection(db, "users");

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((res) => {
        if (res) {
          addDoc(ColUsers, {
            uid: res.user.uid,
            email: res.user.email,
            name: res.user.displayName,
            provider: res.user.providerData[0].providerId,
            photoUrl: res.user.photoURL,
          }).catch((e) => {
            console.log("error: ", e);
          });
        }

        if (res.user.accessToken) {
          const cookies = parseCookies();
          // Set
          setCookie(null, "userToken", res.user.accessToken, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });

          // console.log("setCookie: ", res.user.accessToken);
        }
      })

      .catch((e) => {
        console.log("Login error: ", e);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Destroy token from cookies.
        destroyCookie(null, "userToken");
        console.log("Sign-out successful");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <div className="loginPage">
      <Typography component="div" sx={{ fontWeight: "bold", padding: "10px" }}>
        Login
      </Typography>
      <Box>
        <Button
          startIcon={<Google />}
          onClick={signInWithGoogle}
          variant="contained"
          sx={{
            marginRight: "10px",
            color: "#fff",
            textTransform: "none",
          }}
        >
          Sign in with google
        </Button>

        {/* <button className="button" onClick={logout}>
          Sign out
        </button> */}
      </Box>
    </div>
  );
};

export default Signin;
