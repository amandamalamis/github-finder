import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `${GITHUB_TOKEN}`,
        validateStatus: false
    }
})

//Get search results
export const searchUsers = async (text) => {
    //will call dispatch loading so can remove here
    const params = new URLSearchParams({
        q: text
    })
git     //updated to use axios
    const response = await github.get(`/search/users?${params}`)
    return response.data.items
}

//Get user and get repos-takes place of both functions below
export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])

    //from the above requests & function
    return { user: user.data, repos: repos.data }
}


//get single user
// export const getUser = async (login) => {

//     const response = await fetch(`${GITHUB_URL}/users/?{login}`,
//         {
//             headers: {
//                 Authorization: `token ${GITHUB_TOKEN}`,
//             }
//         })

//     if (response.status === 404) { //force redirect to notfound page
//         window.location = '/notfound'
//     }
//     else {
//         const data = await response.json()
//         return data
//         //return instead of dispatch

//     }
// }

//get user respos
// export const getUserRepos = async (login) => {

//     const params = new URLSearchParams({
//         sort: 'created',
//         per_page: 10
//     })

//     const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,
//         {
//             headers: {
//                 Authorization: `token ${GITHUB_TOKEN}`,
//             }
//         })


//     //return data instead of dispatch
//     const data = await response.json()
//     return data
// }
