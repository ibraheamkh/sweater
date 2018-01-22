import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class BmcListItem extends Component {
    // componentWillUpdate() {
    //     LayoutAnimation.spring();
    // }

    // renderDescription() {
    //     const { item, expanded } = this.props;
    //     if (expanded) {
    //         return (
    //             <CardSection>
    //                 <Text>{item.description} </Text>
    //             </CardSection>
    //         );
    //     }
    // }

    onRowPress() {

        Actions.bmcEdit(this.props.bmc);

    }
    
    render() {
        //console.log(this.props);
        const { name, problem } = this.props.bmc;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{name}, {problem} </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
            
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

// const mapStateToProps = (state, ownProps) => {
    
// };

export default BmcListItem;
