import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { authentication } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import nookies, { destroyCookie } from "nookies";
import { parseCookies, setCookie } from "nookies";
import { Google } from "@mui/icons-material";

const Signin = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(authentication, provider)
      .then((res) => {
        console.log(
          "Login successful Token: ",
          res.user.accessToken
          // "Response: ",
          // res
        );

        if (res.user.accessToken) {
          const cookies = parseCookies();
          // Set
          setCookie(null, "userToken", res.user.accessToken, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });

          console.log("setCookie: ", res.user.accessToken);
        }
      })

      .catch((e) => {
        console.log("Login error: ", e);
      });
  };

  const logout = () => {
    signOut(authentication)
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
