import { useState } from 'react';
import './ProfileDashboard.css';
import Activity from './Activity';
import PostList from './PostList';

function ProfileDashboard() {
    const [activeTab, setActiveTab] = useState('Activity');

    // To know what tab is open, Activity or Posts
    const handleTab = (tabName) => {
        setActiveTab(tabName)
    }

    return (
        <div className='profile-dashboard'>
            <h1>Dashboard</h1>
            <ul>
                <li className={activeTab === 'Activity' ? 'active-tab' : ''} onClick={() => handleTab('Activity')}>Activity</li>
                <li className={activeTab === 'Posts' ? 'active-tab' : ''} onClick={() => handleTab('Posts')}>Posts</li>
            </ul>
            {activeTab === 'Activity' ? <Activity /> : <PostList />}
        </div> 
    );
}

export default ProfileDashboard;