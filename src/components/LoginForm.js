import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    //These are helper functions
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderButton() {
        //if it is loading render spinner 
        if (this.props.loading) {
            return <Spinner size='large' />;         
        } 

        //otherwise render the button
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                            تسجيل الدخول 
                    </Button>
        );
    }
    
    renderError() {
       if (this.props.error) {
        return (
            <View style={{ backgroundColor: 'white' }}> 
                <Text style={styles.errorTextStyle}> 
                    {this.props.error}
                </Text>
            </View>
        );

       } 
    }
    //END of helper functions

    render() {
        return (
            <Card >
                <CardSection>
                    <Input 
                        label={'Email '}
                        placeholder={'test@test.com'}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
            

                    </CardSection>

                <CardSection>
                    <Input 
                        label={'Password '}
                        placeholder={'123456789'}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        secureTextEntry
                    />
            

                    </CardSection>
                    
                    {this.renderError()}

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>    
                </Card>
                
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }

}

//This function maps whatever the reducer provide
// currently our producer is called auth in reducers/index.js

const mapStateToProps = ({ auth }) => {
   const { email, password, error, loading } = auth;
   
   return { email, password, error, loading };
};

// const mapStateToProps = state => {
//     return {
//         email: state.auth.email,
//         password: state.auth.password,
//         error: state.auth.error

//     };
// };

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
