import CosmicLogo from '../assets/images/logowhite.png';
import '../assets/stylesheet/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import UserIcon from './UserProfilePage/UserIcon.jsx';
import { useContext, useState } from 'react';
import { UserContext } from '../App';
    
function NavBar() {
    const { userLog } = useContext(UserContext); 
    const { scrollTop } = useContext(UserContext);
    const [itemSearch, setItemSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search_result/${itemSearch}`);
    }

    return (
        <div className="nav-bar" ref={scrollTop}>
            <img id='logo' src={CosmicLogo} alt="cosmic logo" />
            <div className='search'>
                <form id='search-bar' className='fluid' onSubmit={handleSubmit}>
                    <i onClick={handleSubmit} className='fas fa-search'></i>
                    <input type="text" value={itemSearch} onChange={(e) => {setItemSearch(e.target.value)}} placeholder="Search artworks, NFT's, collections "/>
                </form>
            </div>
            <div className='icons'>
                <Link to='/'>
                    <button><i className="fa-sharp fa-solid fa-house fa-2xl"></i></button>
                </Link>
                <Link to='/newsfeed'>
                    <button><i className="fa-solid fa-newspaper fa-2xl"></i></button>
                </Link>
                <Link to={`/profile/${userLog.username}`} style={{textDecoration: 'none'}}>
                {Object.keys(userLog).length === 0 && userLog ? 
                    <button><i className="fa-solid fa-user fa-2xl"></i></button> 
                    : 
                    <UserIcon />
                }
                </Link>
            </div>
        </div>
    );
}

export default NavBar;