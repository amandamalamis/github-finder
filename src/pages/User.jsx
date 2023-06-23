
import { FaCodeOen, FaStore, FaUSerFriends, FaUsers } from 'react-icons/fa'
import { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import Spinner from '../components/layout/Spinner'
import GithubContext from '../context/github/GithubContext'

function User() {
//getuserfunction, user state 
    const {getUser, user, loading} = useContext(GithubContext)

    const params = useParams()

    const {
        name, 
        type, avatar_url, 
        location, 
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_ggists,
        hireable
    } = user

    useEffect(() => {
        getUser(params.login)
       // getUserRepos(params.login)
    }, [])

   


    if (loading) {
        return <Spinner></Spinner>
    }
  return (
  //use fragment as wrapper  
    <> 
    <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
            <Link to ="/" className='btn btn-ghost'>
                Back to search
            </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8md:gap-8">
            <div className="custom-card-image mb-6 md:md-0">
                <div className="rounded-lg shadow-xl card image-full">
                    <figure>
                        <img src={avatar_url} alt="Avatar url">

                        </img>
                    </figure>
                    <div className="card-body justify-end">
                        <h2 className="card-title mb-0">
                            {name}
                        </h2>
                        <p>{login}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </> 
  )
}

export default User