import React, { Component } from 'react';
import { connect } from 'react-redux';

class FriendsItem extends Component {

    render() {
        return (
            <>
                <li>
                    {this.props.activity.user_id} {this.props.activity.action} {this.props.activity.name} on {this.props.activity.entry_date}.
                </li>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(FriendsItem);
