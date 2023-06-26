import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import PropTypes from 'prop-types'


//prop repo
function RepoItem({ repo }) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo

    return (
        <div className='mb-2 rounded-md card'>
            <div className='card-body'>
                <h3 className="mb-2 text-sl font-semi-bold">
                    {/* // eslint-disable-next-line
                    //will bring users to the repo page */}
                    <a href={html_url} target='_blank' rel='noreferrer'>
                        <FaLink className='inline mr-1'>{name} </FaLink> {name}
                    </a>
                </h3>
                <p className="mb-3">{description}</p>
                <div>
                    <div className='mr-2 badge badge-info badge-lg'>
                        <FaEye className='mr-2'></FaEye> {watchers_count}
                    </div>
                    <div className='mr-2 badge badge-success badge-lg'>
                        <FaStar className='mr-2'></FaStar> {stargazers_count}
                    </div>
                    <div className='mr-2 badge badge-error badge-lg'>
                        <FaInfo className='mr-2'></FaInfo> {open_issues}
                    </div>
                    <div className='mr-2 badge badge-warning badge-lg'>
                        <FaUtensils className='mr-2'></FaUtensils> {forks}
                    </div>
                </div>
            </div>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}
export default RepoItem