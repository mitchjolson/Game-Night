import React, {Component} from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../CollectionItem/CollectionItem'

// Material UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

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
      <div>
          {this.props.reduxStore.userCollection.map((game, i) => {
            return (<CollectionItem key={i} game={game} history={this.props.history}/>);
          })}
      </div>
      </>
    )
  }

};

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(withStyles(styles)(Collection));
