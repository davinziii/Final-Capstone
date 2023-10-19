import Header from '../components/Header';
import ProfileInfo from '../components/UserProfilePage/ProfileInfo';
import ProfileDashboard from '../components/UserProfilePage/ProfileDashboard';

function UserProfilePage() {

    return (
        <div>
            <Header />
            <ProfileInfo />
            <ProfileDashboard />
        </div>
    );
}

export default UserProfilePage;