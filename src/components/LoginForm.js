import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { mobileChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    onMobileChange(text) {
        this.props.mobileChanged(text);
    }

    render() {
        return (
            <Card >
                <CardSection>
                    <Input 
                        label={'رقم الجوال'}
                        placeholder={'0566666666'}
                        onChangeText={this.onMobileChange.bind(this)}
                    />
                    <Text> Hi st {this.props.mobile} </Text>

                    </CardSection>
                    
                    <CardSection>
                        <Button>
                            تسجيل الدخول 
                           </Button>
                    
                    </CardSection>    
                </Card>
                
        );
    }
}

const mapStateToProps = state => {
    return {
        mobile: state.auth.mobile
    };
};

export default connect(mapStateToProps, { mobileChanged })(LoginForm);
