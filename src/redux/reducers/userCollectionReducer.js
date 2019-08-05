const userCollection = (state = [], action) => {
    console.log('in userCollection reducer, action.payload is', action.payload);
    switch (action.type) {
        case 'SET_USER_COLLECTION':
            return action.payload;
        default:
            return state;
    }
};

// loginMode will be on the redux state at:
// state.loginMode
export default userCollection;