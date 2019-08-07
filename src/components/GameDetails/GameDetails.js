import React, { Component } from 'react';
import { connect } from 'react-redux';



class GameDetails extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_GAME_DETAILS', payload: this.props.reduxStore.user.id })
    }

    render() {
        return (
            <>
                <div>
                    <p>
                        Game Details
                    </p>
                </div>
            </>
        )
    }

};

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(GameDetails);
