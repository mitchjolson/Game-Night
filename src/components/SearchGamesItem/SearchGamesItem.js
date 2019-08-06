import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categorize from '../Categorize/Categorize'

class SearchGamesItem extends Component {


    // handleDelete = () => {
    //     this.props.dispatch({ type: 'DELETE_ANIMAL', payload: this.props.classData.id });
    // }

    handleAdd = () => {
        let myPayload = {
            game: this.props.game,
            user: this.props.reduxStore.user.id
        }
        this.props.dispatch({type: 'ADD_GAME', payload: myPayload})
    }

    whyTho = (game) => {
        let name = game ? game.id : "";
        return Categorize(name);
    }

    render() {
        return (
            <tr>
                <td>{this.props.game.name}</td>
                <td>{this.whyTho(this.props.game.categories[0])}</td>
                <td>{this.props.game.min_players} - {this.props.game.max_players}</td>
                <td>{this.props.game.min_playtime} - {this.props.game.max_playtime}</td>
                <td>{this.props.game.year_published}</td>
                <td>{this.props.game.publishers[0]}</td>
                <td><button onClick={this.handleAdd}>Add</button></td>
            </tr>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(SearchGamesItem);
