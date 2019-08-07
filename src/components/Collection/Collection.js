import React, {Component} from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../CollectionItem/CollectionItem'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Collection extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER_COLLECTION', payload: this.props.reduxStore.user.id })
  }

  render() {
    return (
      <>
      <div>
        <p>
          Collection
        </p>
      </div>
      <table className="collectionTable">
        <thead>
            <tr><th>Game</th><th>Category</th><th>Players</th><th>Playtime</th><th>Rating</th><th>&nbsp;</th></tr>
        </thead>
        <tbody>
          {this.props.reduxStore.userCollection.map((game, i) => {
            return (<CollectionItem key={i} game={game} />);
          })}
        </tbody>
      </table>
      </>
    )
  }

};

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(Collection);
