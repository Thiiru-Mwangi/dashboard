import { topDealUsers } from '../../data'
import './topBox.scss'

const Topbox = () => {
  return (
    <div className='topBox'>
        <h1>Top Deals</h1>
        <div className="list">
            {topDealUsers.map((user) => (
                <div className='listItem' key={user.id}>
                    <div className="user">
                        <img src={user.img} alt="user-image" width={36} height={36}/>
                        <div className="user-text">
                            <span className="username">{user.username}</span>
                            <span className="email">{user.email}</span>
                        </div>
                    </div>
                    <span className="amount">${user.amount}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Topbox