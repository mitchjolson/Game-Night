import React, { Component } from 'react';
import { connect } from 'react-redux';



class GameDetails extends Component {

    render() {
        return (
            <>
                <div>
                    
                </div>
            </>
        )
    }

};

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(GameDetails);
