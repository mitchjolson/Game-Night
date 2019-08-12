import React, { Component } from 'react';
import { connect } from 'react-redux';

class Friends extends Component {

    componentDidMount = () => {
        console.log('Friends page did mount');
        this.props.dispatch({ type: 'FETCH_FRIENDS', payload: this.props.reduxStore.user.id });
    }

    render() {
        return (
            <>
                <h1>Friends</h1>
            </>
        )
    }

};

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Friends);
