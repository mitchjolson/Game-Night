import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* removeGame(action) {
    try {
        yield axios.delete(`/api/games/${action.payload.user}`, { data: action.payload });
    } catch (error) {
        console.log('Error removing game from collection:', error);
    }
}

function* removeGameSaga() {
    yield takeEvery('REMOVE_GAME_FROM_COLLECTION', removeGame);
}

export default removeGameSaga;