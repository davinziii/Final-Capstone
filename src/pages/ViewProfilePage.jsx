import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import '../components/UserProfilePage/ProfileInfo.css';
import Users from '../utils/HardCodedUsers';

function ViewProfilePage() {
    const { username } = useParams();
    let userLog = [];

    for ( let i = 0; i < Users.length; i++ ) {
        if (username === Users[i].username) {
            userLog = Users[i];
        }
    }

    return (
        <div>
            <Header />
            <div className='profile-info'>
                <div className='profile-pictures'>
                    <div className='profile-banner'>
                        <div className='banner' style={{backgroundImage: `url(${userLog.banner})`}}></div>
                    </div>
                    <img id='profile-pic' src={userLog.profilePicture} alt="" />
                </div>
                <div className='profile-description'>
                    <div className='user'>
                        <div>
                            <h2>{userLog.nickname}</h2>
                            <p id='user-tag'>{userLog.username}</p>
                        </div>
                        <div>
                            <button>Follow</button>
                            <button>Message</button>
                        </div>                    </div>
                    <p id='user-bio'>{userLog.bio}</p>
                    <div className='social-links'>
                        <Link to={userLog.twitterName}>
                            <button id='twitter'><i class="fa-brands fa-twitter"></i></button>
                        </Link>
                        <Link to={userLog.instagramName}>
                            <button id='instagram'><i class="fa-brands fa-instagram"></i></button>
                        </Link>
                        <Link to={userLog.discordLink}>
                            <button id='discord'><i class="fa-brands fa-discord"></i></button>
                        </Link>
                        <Link to={userLog.linkedin}>
                            <button id='linkedin'><i class="fa-brands fa-linkedin"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{padding: '20px 60px', fontFamily: "'Open Sans', sans-serif"}}>
                <h1>Dashboard is private.</h1>
            </div>
        </div>
    );
}

export default ViewProfilePage;

