import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { bmcUpdate } from '../actions';
import { CardSection, Input } from './common';

class BmcForm extends Component {

    render() {
        return (
                <View>
                    <CardSection>
                        <Input
                            label="Idea Name"
                            placeholder=" eg. cool idea"
                            value={this.props.name}
                            onChangeText={ value => this.props.bmcUpdate({ prop:'name', value })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input 
                            label="Problem"
                            placeholder="tell us your observation"
                            value={this.props.problem}
                            onChangeText={value => this.props.bmcUpdate({ prop: 'problem', value })}
                        />
                    </CardSection>

                    <CardSection style={{ flexDirection: 'column' }}>
                        <Text style={styles.pickerTextStyle}> Customer Segments </Text>
                        <Picker
                            selectedValue={this.props.customersSegments}
                            onValueChange={value => this.props.bmcUpdate({ prop: 'customersSegments', value })}
                        >
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                            <Picker.Item label="All" value="All" />
                        </Picker>
                    </CardSection>

                </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 18
    }
};

const mapStateToProps = (state) => {
    const { name, problem, customersSegments } = state.bmcForm;

    return { name, problem, customersSegments };
};

export default connect(mapStateToProps, { bmcUpdate })(BmcForm);