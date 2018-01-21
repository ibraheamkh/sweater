import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import BmcList from './components/BmcList';
import BmcCreate from './components/BmcCreate';

//The router is the responsible of moving the app from Scene to another Scene
//Meaning App Navigation

//Each Scene has properties
// 1- key: to give the scene unique name
// 2- component: the component to use
// 3- title: optional
// 4- inital to make the Scene inital

//To navigate we call the Scene by its key

//here we might manage authintication status for the whole scenes 
//just idea

//All 

const RouterComponent = () => {
    //the router wraps the root Scene
    //now since we are using nested Scenes 
    //we should pick the key name carefully

    //here we divide out app flow
    return (
        <Router> 
            <Scene key="root" hideNavBar >
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title=" Please Login" inital />
                </Scene>

                <Scene key="main">
                    <Scene 
                        rightTitle="Add" 
                        onRight={ () => Actions.bmcCreate()} 
                        key="bmcList" 
                        component={BmcList} 
                        title=" Services" 
                    />
                    <Scene 
                        key="bmcCreate"
                        component={BmcCreate}
                        title="Create BMC"
                    />
                </Scene>   
            </Scene>
        </Router>

    );
};


export default RouterComponent;