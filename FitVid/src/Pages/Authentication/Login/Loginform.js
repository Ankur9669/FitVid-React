import React, { useState } from "react";
import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
  PrimaryButton,
  SecondaryButton,
  Axios,
  Link,
  useNavigate,
  loginUser,
  uuid,
  useToast,
  useUser,
} from "../index";
import "../authentication.css";

function Loginform() {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { showToast } = useToast();
  const { user, dispatchUser } = useUser();

  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    //TODO VALIDATIONS
    e.preventDefault();
    loginUser();
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    const { data, success, message } = loginUser(
      formDetails.email,
      formDetails.password
    );

    if (success) {
      dispatchUser({
        type: "LOGIN",
        payload: { value: data },
      });
      showToast(message, "SUCCESS");
      navigate("/");
    } else {
      showToast("Please Sign Up First", "ERROR");
    }
  };
  const handleLoginWithGuestClick = async (e) => {
    e.preventDefault();
    const { data, success, message } = await loginUser(
      "adarshbalika@gmail.com",
      "adarshBalika123"
    );

    if (success) {
      dispatchUser({
        type: "LOGIN",
        payload: { value: data },
      });
      showToast(message, "SUCCESS");
      navigate("/");
    } else {
      dispatchToast({
        type: "ADD_TOAST",
        payload: { value: { id: uuid(), title: message, type: "ERROR" } },
      });
      console.log(message);
    }
  };

  return (
    <div className="authentication-form-container">
      <form className="authentication-form">
        <h2 className="font-large weight-semi-bold authentication-form-heading">
          <span className="logo-text font-large">FiT</span>Vid
        </h2>
        <p className="font-medium-large weight-semi-bold authentication-form-sub-heading">
          LOGIN INTO YOUR ACCOUNT
        </p>
        <div className="form-input-box">
          <input
            type="email"
            placeholder="Email Address"
            value={formDetails.email}
            onChange={(e) =>
              setFormDetails({ ...formDetails, email: e.target.value })
            }
            required
          />
          <AiOutlineMail className="mail-icon" />
        </div>
        <div className="form-input-box">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            value={formDetails.password}
            onChange={(e) =>
              setFormDetails({ ...formDetails, password: e.target.value })
            }
            required
          />
          {isPasswordVisible ? (
            <AiFillEye
              className="mail-icon"
              onClick={() => setPasswordVisible((prev) => !prev)}
            />
          ) : (
            <AiFillEyeInvisible
              className="mail-icon"
              onClick={() => setPasswordVisible((prev) => !prev)}
            />
          )}
        </div>
        <div className="checkbox-container">
          <span>
            <input type="checkbox" value="Remember Box" id="remember-box" />
            <label
              htmlFor="remember-box"
              className="font-medium remember-me-checkbox"
            >
              Remember Me
            </label>
          </span>
          <Link to="/" className="forgot-password-btn font-medium">
            Forgot Password
          </Link>
        </div>

        <PrimaryButton
          buttonText="Login As Guest"
          className="form-cta-button"
          onClick={(e) => handleLoginWithGuestClick(e)}
        />

        <PrimaryButton
          buttonText="Login"
          className="form-cta-button"
          onClick={(e) => handleLoginClick(e)}
        />

        <Link to="/signup">
          <SecondaryButton
            buttonText="SignUp With Us"
            className="form-cta-button"
          />
        </Link>
      </form>
    </div>
  );
}

export default Loginform;
