const intialState = {
  authLogged: false,
  authCheking: false,
  authUID: null,
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case `types definir`:
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;
