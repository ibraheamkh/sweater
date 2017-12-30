import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: '<API_KEY>',
      authDomain: '<PROJECT_ID>.firebaseapp.com',
      databaseURL: 'https://<DATABASE_NAME>.firebaseio.com',
      storageBucket: '<BUCKET>.appspot.com',
      messagingSenderId: '<SENDER_ID>',
    };
    firebase.initializeApp(config);
  }
  render() {
    const { viewStyle } = styles;
    return (
      <Provider store={createStore(reducers)}>
        <View style={viewStyle}> 
          <LoginForm />
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
