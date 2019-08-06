import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchGamesItem extends Component {

    state = {
        category: this.props.game.categories[0],
    }
    // Renders the list of animals

    // handleDelete = () => {
    //     this.props.dispatch({ type: 'DELETE_ANIMAL', payload: this.props.classData.id });
    // }
    componentDidMount(){
        console.log('---- need to find categories', this.state.category);
        console.log('ternary function time', this.greeting(this.state.category))
    }


    greeting = (person) => {
        var name = person ? person.id : "stranger";
        return name;
    }

    render() {
        return (
            <tr>
                <td>{this.props.game.name}</td>
                <td>{this.greeting(this.state.category)}</td>
                <td>{this.props.game.min_players} - {this.props.game.max_players}</td>
                <td>{this.props.game.playing_time}</td>
                <td>{this.props.game.rating}</td>
                <td>{this.props.game.weight}</td>
                {/* <td><button onClick={this.handleDelete}>Delete</button></td> */}
            </tr>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(SearchGamesItem);
