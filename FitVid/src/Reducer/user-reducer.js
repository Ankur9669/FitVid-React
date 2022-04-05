const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload.value, isUserLoggedIn: true };

    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        user: {},
        isUserLoggedIn: false,
      };
  }
};

export { userReducer };
