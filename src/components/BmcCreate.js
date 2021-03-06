import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bmcUpdate, bmcCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import BmcForm from './BmcForm';

class BmcCreate extends Component {

    onButtonPress() {
        const { name, problem, customersSegments } = this.props;
        
        this.props.bmcCreate({ name, problem, customersSegments: customersSegments || 'All' });
    }

    render() {
        return (
            <Card>
               <BmcForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        أنشئ نموذج عمل
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, problem, customersSegments } = state.bmcForm;

    return { name, problem, customersSegments };
};

export default connect(mapStateToProps, { bmcUpdate, bmcCreate })(BmcCreate);
