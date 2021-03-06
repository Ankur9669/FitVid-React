import React, { useState } from "react";
import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
  PrimaryButton,
  SecondaryButton,
  Link,
  useNavigate,
  useToast,
  useUser,
} from "../index";
import "../authentication.css";
import { signUpUser } from "../../../Util/signupUser";

function SignupForm() {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { user, dispatchUser } = useUser();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    //TODO VALIDATIONS
    e.preventDefault();
    handleSignUpClick();
  };

  const handleSignUpClick = async () => {
    if (
      formDetails.email === "" ||
      formDetails.password === "" ||
      formDetails.firstName === "" ||
      formDetails.lastName === ""
    ) {
      showToast("Please Enter the details in form", "ERROR");
      return;
    }
    const { data, success, message } = await signUpUser(
      formDetails.firstName,
      formDetails.lastName,
      formDetails.email,
      formDetails.password
    );

    if (success) {
      showToast(message, "SUCCESS");
      dispatchUser({
        type: "LOGIN",
        payload: { value: data },
      });
      navigate("/");
    } else {
      showToast(message, "ERROR");
    }
  };
  return (
    <div className="authentication-form-container">
      <form className="authentication-form">
        <h2 className="font-large weight-semi-bold authentication-form-heading">
          <span className="logo-text font-large">FiT</span>BiT
        </h2>
        <p className="font-medium-large weight-semi-bold authentication-form-sub-heading">
          REGISTER WITH US
        </p>
        <div className="form-input-box">
          <input
            type="text"
            placeholder="First Name"
            value={formDetails.firstName}
            onChange={(e) =>
              setFormDetails({ ...formDetails, firstName: e.target.value })
            }
            required
          />
        </div>

        <div className="form-input-box">
          <input
            type="text"
            placeholder="Last Name"
            value={formDetails.lastName}
            onChange={(e) =>
              setFormDetails({ ...formDetails, lastName: e.target.value })
            }
            required
          />
        </div>

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

        <PrimaryButton
          buttonText="Create New Account"
          className="form-cta-button"
          onClick={(e) => onSubmitForm(e)}
        />

        <Link to="/login">
          <SecondaryButton
            buttonText="Already have an account!!!"
            className="form-cta-button"
          />
        </Link>
      </form>
    </div>
  );
}

export default SignupForm;
