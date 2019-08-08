import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categorize from '../Categorize/Categorize'

class CollectionItem extends Component {

    handleDetails = () => {
        this.props.dispatch({ type: 'FETCH_GAME_DETAILS', payload: this.props.game.atlas_id })
        this.props.history.push('/gamedetails')
    }

    render() {
        return (
            <tr>
                <td>{this.props.game.name}</td>
                <td>{Categorize(this.props.game.category)}</td>
                <td>{this.props.game.min_players} - {this.props.game.max_players}</td>
                <td>{this.props.game.playtime}</td>
                <td>{this.props.game.rating}</td>
                <td><button onClick={this.handleDetails}>Details</button></td>
                <td><button onClick={this.handleDelete}>Delete</button></td>
            </tr>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(CollectionItem);
