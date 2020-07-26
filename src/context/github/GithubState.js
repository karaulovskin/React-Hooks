import React, {useReducer} from "react"
import {githubReducer} from "./githubReducer";

export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    return (
        <GithubState.Provider value={{

        }}>
            {children}
        </GithubState.Provider>
    )
}