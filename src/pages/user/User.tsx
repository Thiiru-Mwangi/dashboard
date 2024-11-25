import SinglePage from '../../components/singlePage/SinglePage'
import { singleUser } from '../../data'
import './User.scss'

// Fetch data and send to singlePage component
const User = () => {
  return (
    <div>
        <SinglePage {...singleUser}/>
    </div>
  )
}

export default User