const searchGame = (state = [], action) => {
    console.log('in userCollection reducer, action.payload is', action.payload);
    switch (action.type) {
        case 'SET_GAME_SEARCH':
            return action.payload;
        default:
            return state;
    }
};

// loginMode will be on the redux state at:
// state.loginMode
export default searchGame;