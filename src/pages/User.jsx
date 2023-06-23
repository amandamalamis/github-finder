
import { FaCodeOen, FaStore, FaUSerFriends, FaUsers } from 'react-icons/fa'
import { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import Spinner from '../components/layout/Spinner'
import GithubContext from '../context/github/GithubContext'

function User() {
//getuserfunction, user state 
    const {getUser, user, loading} = useContext(GithubContext)

    
    const params = useParams()

    useEffect(() => {
        getUser(params.login)
       // getUserRepos(params.login)
    }, [])
  return (
    <Spinner />
  )
}

export default User