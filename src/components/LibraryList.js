import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class LibraryList extends Component {
    
    componentWillMount() {
        //setting up the view data on each mount
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }


    renderRow(library) {
        return <ListItem item={library} />;
    }

    render() {
        //console.log(this.props);
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}


const mapStateToProps = state => {
    //console.log(state.libraries);
    //console.table(state.libraries);
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);