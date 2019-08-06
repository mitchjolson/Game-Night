import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categorize from '../Categorize/Categorize'

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
        var name = person ? person.id : "";
        return Categorize(name);
    }

    render() {
        return (
            <tr>
                <td>{this.props.game.name}</td>
                <td>{this.greeting(this.state.category)}</td>
                <td>{this.props.game.min_players} - {this.props.game.max_players}</td>
                <td>{this.props.game.min_playtime} - {this.props.game.max_playtime}</td>
                <td>{this.props.game.year_published}</td>
                <td>{this.props.game.publishers[0]}</td>
                {/* <td><button onClick={this.handleDelete}>Delete</button></td> */}
            </tr>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(SearchGamesItem);
