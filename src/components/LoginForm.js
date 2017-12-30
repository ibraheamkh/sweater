import React, { Component } from 'react';
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

export default connect(null, { mobileChanged })(LoginForm);
