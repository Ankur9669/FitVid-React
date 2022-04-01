const userReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload.value, isUserLoggedIn: true };

    case "LOGOUT":
      return initialState;
  }
};

export { userReducer };
