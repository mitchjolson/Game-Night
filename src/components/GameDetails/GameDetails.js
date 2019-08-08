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
        // alert(`Added ${this.props.reduxStore.gameDetails.name} to your collection.`)
        // this.props.history.push('/search')
    }

    checkIfOwned = () => {
        for(let i=0; i < this.props.reduxStore.userCollection.length; i++){
            console.log('checking if these two are equal:', this.props.reduxStore.userCollection[i].atlas_id, this.props.reduxStore.gameDetails.atlas_id)
            if (this.props.reduxStore.userCollection[i].atlas_id === this.props.reduxStore.gameDetails.atlas_id){
                return <button onClick={this.handleRemove}>Remove from Collection</button>
            }
        }
        return <button onClick={this.handleAdd}>Add to Collection</button>
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
                    {this.checkIfOwned()}
                </div>
            </>
        )
    }

};

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(GameDetails);
