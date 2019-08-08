import React, { Component } from 'react';
import { connect } from 'react-redux';



class GameDetails extends Component {

    componentDidMount = () => {
        console.log('gameDetails:', this.props.reduxStore.searchGame)
    }

    render() {
        return (
            <>
                <div>
                    <p> {this.props.reduxStore.gameDetails.name} </p>
                    <img src={this.props.reduxStore.gameDetails.image} alt={this.props.reduxStore.gameDetails.name} />
                </div>
            </>
        )
    }

};

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(GameDetails);
