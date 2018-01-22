import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { bmcFetch } from '../actions';
import BmcListItem from './BmcListItem';

// BMC list is a business model canvas a domain model 
class BmcList extends Component {

    componentWillMount() {
        this.props.bmcFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {

        this.createDataSource(nextProps);
    }

    //helper method for the list
    createDataSource({ bmcList }) {

        //This is list boilerplate
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(bmcList);
        //end of list boilerplate
    }

    renderRow(bmc) {
        return (
            <BmcListItem bmc={bmc} />
        );
    }

    render() {
        console.log(this.props);
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

}

const mapStateToProps = (state) => {
    const bmcList = _.map(state.bmcList, (val, uid) => {
        return { ...val, uid };
    });

    return { bmcList };
};

export default connect(mapStateToProps, { bmcFetch })(BmcList);
