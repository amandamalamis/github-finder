const githubReducer = (state,action) => {
    switch(action.type) {
        case 'GET_USERS': 
        return {
            ...state, //will return the current state
            users: action.payload, //users is the array of users
            loading: false,
        }
        case 'GET_USER': 
        return {
            ...state, //will return the current state
            user: action.payload, //user is the single user object
            loading: false,
        }
        case 'SET_LOADING': 
        return {
            ...state, //will return the current state
            loading: true,
        }
        case 'CLEAR_USERS': 
        return {
            ...state, //will return the current state
            users: [],
            loading: true,
        }

        default: 
            return state
    }
}

export default githubReducer