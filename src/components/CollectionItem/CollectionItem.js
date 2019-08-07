import React, { Component } from 'react';
import { connect } from 'react-redux';

class CollectionItem extends Component {
    // Renders the list of animals

    // handleDelete = () => {
    //     this.props.dispatch({ type: 'DELETE_ANIMAL', payload: this.props.classData.id });
    // }

    render() {
        return (
            <tr>
                <td>{this.props.game.name}</td>
                <td>{this.props.game.category}</td>
                <td>{this.props.game.min_players} - {this.props.game.max_players}</td>
                <td>{this.props.game.playtime}</td>
                <td>{this.props.game.rating}</td>
                {/* <td><button onClick={this.handleDelete}>Delete</button></td> */}
            </tr>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(CollectionItem);
