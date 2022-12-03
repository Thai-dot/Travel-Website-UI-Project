import loginAction from "../action/loginAction"
import initialState from "./initialState";



const loginReducer = (action: any, state = initialState) => {
  switch (action.type) {
    case loginAction.LOGIN_COMPLETE:
      {
        console.log(action)
        return {...state, user:action.data};
      }
    case loginAction.LOGOUT:
      return state;
    default:
      return state;
  }
};

export default loginReducer;
