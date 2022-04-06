import React from "react";
import "../authentication.css";
import SignupForm from "./SignupForm";
import AuthenticationBackground from "../AuthenticationBackground";
import Navbar from "../../../Components/NavBar/Navbar";
import { useDocumentTitle } from "../../../Util/change-document-title";

function SignUp() {
  useDocumentTitle("FitVid-Signup");
  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>
      <div className="wrapper">
        <AuthenticationBackground />
        <div className="authentication">
          <div className="authentication-image-container">
            <img src="images/fitvid-signup.svg" alt="signup-image" />
          </div>
          <SignupForm />
        </div>
      </div>
      <div className="spacer-3"></div>
    </div>
  );
}

export default SignUp;
