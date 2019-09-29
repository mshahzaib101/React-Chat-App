
import users from '../actions/users'


const INITIAL_STATE = {
    messages : [],
}

function User_Message_list(state = INITIAL_STATE, action) {
  switch (action.type) {
  case users.update_msg_list:
  //  state.messages.push(action.payload);
    return Object.assign({}, state, {messages : action.payload});
  
  default:
    return state
  }
}

export default User_Message_list;