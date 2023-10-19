import { Link } from 'react-router-dom';
import './LeftSidePanel.css';

function SuggestedUser(props) {
    const { user } = props.users;

    return (
        <div className='suggested-user'>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={user.profilePicture} alt="profilepic" />
                <div>
                    <h3>{user.nickname}</h3>
                    <p className='text-muted'>{user.username}</p>
                </div>
            </div>
            <div className='buttons'>
                <button>Follow</button>
                <Link to={`/viewprofile/${user.username}`}>
                    <button>View Profile</button>
                </Link>
            </div>
        </div>
    );
}

export default SuggestedUser;