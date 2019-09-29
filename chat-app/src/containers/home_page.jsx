import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import Nav_Bar from '../components/navbar';
import users from '../store/actions/users';
import img1 from '../images/img3.jpg';



// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        currentUser : state.Loged_in_user
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
        }
    };
}

class Home_page extends Component {

  Logging_user_in = (value) => {
    this.props.logging_user(value);
  }

  changing_fb_btn = (value) => {
    this.props.changing_fb_btn(value);
  }

  render() {
    return (
      <div >
            <Nav_Bar logginguser={this.Logging_user_in} updateduser={this.props.currentUser} changing_fb_btn_view={this.props.changing_fb_btn} />
     <div style={{width : '50%'}}>
      <img src={img1} className='img1' style={{height: 400, width: 700, marginTop: 64 }} />
      </div>
      <div style={{fontSize: '44px',
                   fontWeight: 700,
                   fontFamily: 'Trenda-Black',
                   lineHeight: 1.25,
                   position: 'relative',
                   left: '700px',
                   bottom: '300px',
                   color: '##435662',
                   }}>
      Join today and <br />begin unlimmited chatting!
      <p 
      style={{fontSize: '20px',
                   fontWeight: 400,
                   fontFamily: 'Trenda-Black',
                   fontStyle: 'italic',
                   color: '##435662',
                   }}
      
      >connect with active users around the world</p>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home_page);
