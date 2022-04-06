import React from "react";
import Navbar from "../../../Components/NavBar/Navbar";
import { useDocumentTitle } from "../../../Util/change-document-title";
import AuthenticationBackground from "../AuthenticationBackground";
import Loginform from "./Loginform";

function Login() {
  useDocumentTitle("FitVid-Login");
  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>
      <div className="wrapper">
        <AuthenticationBackground />
        <div className="authentication login">
          <div className="authentication-image-container">
            <img src="images/fitvid-login.svg" alt="login" />
          </div>
          <Loginform />
        </div>
      </div>
      <div className="spacer-3"></div>
    </div>
  );
}

export default Login;
