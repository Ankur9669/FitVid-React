import Axios from "axios";
const signUpUser = async (firstName, lastName, email, password) => {
  try {
    const response = await Axios.post("/api/auth/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    const token = response.data.encodedToken;
    localStorage.setItem("token", token);

    return {
      data: response.data.createdUser,
      success: true,
      message: "SignUp Successfull",
    };
  } catch (error) {
    console.error(error);
    return {
      data: "",
      success: false,
      message: "SignUp Failed",
    };
  }
};

export { signUpUser };
