const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

//Get initial users - testing purposes
export const searchUsers = async (text) => {
    //will call dispatch loading so can remove here

    const params = new URLSearchParams({
        q: text
    })

    const response = await fetch(`${GITHUB_URL}/search/users/?{params}`,
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            }
        })

    const { items } = await response.json()

    dispatch({
        type: 'GET_USERS',
        payload: text,
    })
}

//get single user
export const getUser = async (login) => {

    const response = await fetch(`${GITHUB_URL}/users/?{login}`,
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            }
        })

    if (response.status === 404) { //force redirect to notfound page
        window.location = '/notfound'
    }
    else {
        const data = await response.json()
        return data
        //return instead of dispatch

    }
}

//get user respos
export const getUserRepos = async (login) => {

    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            }
        })
        
        
        //return data instead of dispatch
    const data = await response.json()
    return data
}