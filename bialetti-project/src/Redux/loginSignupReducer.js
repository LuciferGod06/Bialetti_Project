import { SIGNIN_REQUEST, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initalData = {
  signin_users: [],
  user_logged_in: {},
  logged_in: false,
};

const paymentReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        signin_users: [...state.signin_users, payload],
      };

    case LOGIN_REQUEST:
      let userFound = state.signin_users.find(
        (ele) =>
          ele.email === payload.email && ele.password === payload.password
      );

      if (userFound == "") {
        return {
          ...state,
          logged_in: false,
        };
      }
      return {
        ...state,
        logged_in: true,
        user_logged_in: userFound,
      };

    // case LOGIN_SUCCESS:
    //     return {

    //     };

    default:
      return state;
  }
};
