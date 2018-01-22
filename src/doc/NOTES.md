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