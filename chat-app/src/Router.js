import React from 'react';
import {Route,Router, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'; //for changing routes with a function
import Home_page from './containers/home_page'
import Dashboard from './containers/dashboard'
import history from './history';


//for changing routes with a function
const CustomRoutes = () => {
    return(
        <Router history={history}>
            <div>
                <Route exact path='/' component={Home_page} />
                 <Route exact path='/dashboard' component={Dashboard} />
                {/*<Route path='/' component={} />
                <Route path='/' component={} /> */}

            </div>
        </Router>
    )
}

// HOW TO CHANGE NAVIGATION
// we us Link
// <Link to='/'>Home</Link>
// <Link to='home'>Home</Link>
// but import from 'react-router-dom';

// HOW TO CHANGE ROUTE WITH A Function
// onclick
// if user enters correct password and you want to change route than 
// in onclick function
// this.props.history.push('/');
// this.props.history.push('home');


// to check currently signed in user
// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//     } else {
//       // No user is signed in.
//     }
//   });

export default CustomRoutes;