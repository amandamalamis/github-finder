const githubReducer = (state,action) => {
    switch(action.type) {
        case 'GET_USERS': 
        return {
            ...state, //will return the current state
            users: action.payload,
            loading: false,
        }
        case 'SET_LOADING': 
        return {
            ...state, //will return the current state
            loading: true,
        }

        default: 
            return state
    }
}

export default githubReducer