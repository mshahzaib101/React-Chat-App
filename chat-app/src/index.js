import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import CustomRoutes from './Router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as firebase from 'firebase';
import {cyan500, grey900, pink500} from 'material-ui/styles/colors';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnzZs6oAlVQECRygMiA3s7PxyrElPVn6w",
    authDomain: "shahzaib-com-app5.firebaseapp.com",
    databaseURL: "https://shahzaib-com-app5.firebaseio.com",
    projectId: "shahzaib-com-app5",
    storageBucket: "shahzaib-com-app5.appspot.com",
    messagingSenderId: "360196709396"
  };
  firebase.initializeApp(config);

  const myTheme =  getMuiTheme({
  palette: {
    textColor: grey900,
  },
});

ReactDOM.render(
  //Wraping up in Provider
  <Provider store={store}>
    <div>
    <MuiThemeProvider muiTheme={myTheme}>
      <CustomRoutes/>
      </MuiThemeProvider>
    </div>
  </Provider>
  ,
  document.getElementById('root')
);
