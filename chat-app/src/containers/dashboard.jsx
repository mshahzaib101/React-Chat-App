import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import Nav_Bar from '../components/navbar';
import users from '../store/actions/users';
import Users_chat_list from '../components/users_chat_list';

// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        currentUser : state.Loged_in_user,
        updated_user_list : state.Updating_chat_list,
        updated_msg_list : state.User_Message_list
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // increment: () => dispatch(CounterAction.increment()),
        logging_user : function (value){
          return dispatch(users.logged_in_user_meh(value));
        },
        changing_fb_btn : function (value){
          return dispatch(users.changing_fb_btn(value));
        },
        updateduserchatlist : (value) => {
            return dispatch(users.updateduserChatlist(value));
        },
        update_user_messages_list : (value) => {
            return dispatch(users.update_messages_list(value));
        }
    };
}

class Dashboard extends Component {

     Logging_user_in = (value) => {
        this.props.logging_user(value);
      }
    
      changing_fb_btn = (value) => {
        this.props.changing_fb_btn(value);
      }

      updateduserlistt = (value) => {
        this.props.updateduserchatlist(value);
      }

      update_userparticular_messages_list = (value) => {
        this.props.update_user_messages_list(value);
      }

    render() {
        return(
            <div>
              <Nav_Bar logginguser={this.Logging_user_in} updateduser={this.props.currentUser} changing_fb_btn_view={this.props.changing_fb_btn} />
              <Users_chat_list updateduserlist={this.updateduserlistt} passing_userlist={this.props.updated_user_list} currentUser_info={this.props.currentUser} updating_msg_list={this.update_userparticular_messages_list} updated_messages_list={this.props.updated_msg_list} />
            </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);