import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

//Currently domain model are not specified but this project will become my simple idea
// a small app for entrepreneuers to make their life easier
// I am making this app for my self to test it 
// + it is an example app for react-native redux flux router and handling auth 
// I will make it the perfect client app

//This is a react-native app that uses (redux + react-redux to manage the state) 
//and (react-native-router-flux for naivgation)
//Redux is independent of react so we use react-redux to wire the two togehter

//This file is the main entry point of the my application 

//Here are the general setup and configurations are done 

//-------------REDUX, REACT-REDUX-----------------
//Redux configuration is done here at the top level
//redux is a helper to manage the App state 
//redux has four main parts Store, Actions, Reducers and Action Creators
//Store is where the state of the App is stored
//Action is an object of { type:'some_action', payload:'some_payload'},  
//and are payloads of information that send data from your application to your store
//Reducers specify how the application's state changes in response to actions sent to the store

//React-redux glue up things between redux and react using the Provider tag
//

//NOW redux-thunk
//redux-thunk like a middleware
//thunk returns a function from Action creator instead of action
//This is like extenstion for action creators

//-----------APP NAVIGATION  using flux router ---------
//We put our router at the top level of the appllication 
//And let the router decides which Page 


//we chose class based declaration so we have access to native methods
class App extends Component {
  
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyD8lYSuiaLg1oRihMPIBLbt1x2HOimvFt4',
      authDomain: 'akwad-f5be9.firebaseapp.com',
      databaseURL: 'https://akwad-f5be9.firebaseio.com',
      projectId: 'akwad-f5be9',
      storageBucket: 'akwad-f5be9.appspot.com',
      messagingSenderId: '588709914374'
    };
    firebase.initializeApp(config);
  }

  render() {
    //we create our redux store, 
    //we pass reducers 
    //empty object ignore for now
    //middlewares to redux so action creators can also return function
    //these middlewares provided by thunk
    //at the end we will pass the store to the Provider
    //The Provider wires up react-redux
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    //Then we pass the Root Router as the root app
    //The Router will handle which Scenes Views to show
    //TODO: based on the state

    const { viewStyle } = styles;
    //We refer to it as router because the file name is Router.js
    return (
      <Provider store={store}>
        <View style={viewStyle}> 
          <Router />
        </View>
      </Provider>
      );
  }
  
}

const styles = {
  viewStyle: {
    flex: 1 
  }
};


export default App;
