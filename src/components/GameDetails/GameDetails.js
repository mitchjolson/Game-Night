import React, { Component } from 'react';
import { connect } from 'react-redux';



class GameDetails extends Component {

    componentDidMount = () => {
        console.log('gameDetails:', this.props.reduxStore.searchGame)
    }

    handleAdd = () => {
        const myPayload = {
            game: this.props.reduxStore.gameDetails,
            user: this.props.reduxStore.user.id
        }
        this.props.dispatch({ type: 'ADD_GAME_FROM_DETAILS', payload: myPayload });
    }

    render() {
        return (
            <>
                <div>
                    <img src={this.props.reduxStore.gameDetails.image} alt={this.props.reduxStore.gameDetails.name} />
                </div>
                <div>
                    <h1> {this.props.reduxStore.gameDetails.name} </h1>
                    <h3>by {this.props.reduxStore.gameDetails.publisher}</h3>
                    <button onClick={this.handleAdd}>Add to Collection</button>
                </div>
            </>
        )
    }

};

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(GameDetails);
