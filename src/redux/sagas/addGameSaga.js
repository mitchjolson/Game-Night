import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* addGame(action) {
    console.log('in addGame, action.payload.game is', action.payload.game)
    console.log('in addGame, userID is', action.payload.user)
    try {
        const response = yield axios.post(`/api/games/checkcollection/${action.payload.user}`, action.payload.game);
        console.log('checking if game exists in DB, response.data is', response.data)
        if(response.data === undefined || response.data.length == 0){
            console.log('game not yet in DB, posting game now')
            yield axios.post(`/api/games/${action.payload.user}`, action.payload.game);
        }
        else{ 
            console.log('game already exists in DB, not posting game')
        }
        yield axios.post(`/api/games/link/${action.payload.user}`, action.payload.game);
        // yield put({ type: 'SET_USER_COLLECTION', payload: action.payload.user })
    } catch (error) {
        console.log('Error linking game:', error);
    }
}

function* addGameSaga() {
    yield takeEvery('ADD_GAME', addGame);
}

export default addGameSaga;