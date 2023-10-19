import { Link, useParams } from 'react-router-dom';
import './ProfileInfo.css';
import { useContext, useState } from 'react';
import { UserContext } from '../../App';

function ProfileInfo() {
    const { userLog, setUserLog } = useContext(UserContext);
    const { username } = useParams();
    const [toggleEdit, setToggleEdit] = useState(false);
    const [changeNickname, setChangeNickname] = useState(userLog.nickname);
    const [changeUsername, setChangeUsername] = useState(userLog.username);
    const [changeBio, setChangeBio] = useState(userLog.bio);
    let userLogged = false;

    const changeInfo = (e) => {
        e.preventDefault();
        setUserLog({
            ...userLog,
            nickname: changeNickname,
            username: changeUsername,
            bio: changeBio
        });
        setToggleEdit(false);
    }

    if ( username === userLog.username) {
        userLogged = true;
    }

    return (
        <div className='profile-info'>
            <div style={{display: `${toggleEdit === false ? '' : 'none'}`}}>
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
                        {userLogged === true ? 
                        <div>
                            <button onClick={() => {setToggleEdit(true)}}>Edit Profile</button>
                        </div> :
                        <div>
                            <button>Follow</button>
                            <button>Message</button>
                        </div>
                        }
                    </div>
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
            <form onSubmit={changeInfo} style={{display: `${toggleEdit === false ? 'none' : ''}`}}>
                <div className='profile-pictures'>
                    <div className='profile-banner'>
                        <div className='banner' style={{backgroundImage: `url(${userLog.banner})`}}></div>
                    </div>
                    <img id='profile-pic' src={userLog.profilePicture} alt="" />
                </div>
                <div className='profile-description'>
                    <div className='user'>
                        <div>
                            <input type="text" value={changeNickname} onChange={(e) => {setChangeNickname(e.target.value)}} style={{fontSize: '22px', fontWeight: 'bold', fontFamily: "'Montserrat', sans-serif"}}/>
                            <input id='user-tag' type="text" onChange={(e) => {setChangeUsername(e.target.value)}} value={changeUsername} style={{display: 'block'}}/>
                        </div>
                        <div>
                            <button type='submit'>Save Changes</button>
                            <button onClick={() => {setToggleEdit(false)}}>Cancel</button>
                        </div>
                    </div>
                    <input id='user-bio' type="text" value={changeBio} onChange={(e) => {setChangeBio(e.target.value)}} style={{width: '70%'}}/>
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
            </form>
            
        </div>
    );
}

export default ProfileInfo;