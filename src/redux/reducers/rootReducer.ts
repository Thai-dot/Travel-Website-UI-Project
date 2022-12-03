import { combineReducers } from 'redux';
import initialState from './initialState';

import login from './login';



const appReducer = combineReducers({
  login,
});



 function rootReducer(state: any, action: any) {

  // if (action.type === AppFlowActions.LOGOUT_REQUEST) {
   
  //   auth.logout();
  //   Auth.signOut({ global: true });
  //   window.location.href = "/login";
    
  //   return initialState;
  // }
 
  // @ts-expect-error uncast type
  return appReducer(state, action);
}

export default rootReducer;