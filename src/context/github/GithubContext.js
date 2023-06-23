import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {}, //single user
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    return <GithubContext.Provider
        value={{
            ...state, //using this spreads all state values instead of writing the following 4 lines: 
            // users: state.users,
            // user: state.user,
            // loading: state.loading,
            // repos: state.repos,
            dispatch,
            //storing the below in an action file, in component, calling the action and dispatching the action to the reducer, passing the payload, updating the user state
            //4 following moved to the actions file:
            //searchUsers,
            //clearUsers,
            // getUser,
            //getUserRepos
        }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext