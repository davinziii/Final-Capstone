import { useContext } from "react";
import { UserContext } from "../../App";
import './UserIcon.css';

function UserIcon() {
    const { userLog } = useContext(UserContext);

    return (
        <div className='user-icon'>
            <img src={userLog.profilePicture} alt="" />
            <div>
                <p>{userLog.nickname}</p>
                <p id='username'>{userLog.username}</p>
            </div> 
        </div>
    );
}

export default UserIcon;