import NavBar from "../components/Header";
import LeftSidePanel from "../components/NewsFeedPage/LeftSidePanel";
import '../assets/stylesheet/SearchPage.css';
import { Link, useParams } from "react-router-dom";
import Collections from '../utils/HardCodedCollections';
import Users from '../utils/HardCodedUsers';
import Ethicon from '../assets/images/ethicon.png';

function SearchPage() {
    const { itemSearch } = useParams();
    const users = [];
    const collections = [];

    for ( let i = 0; i < Collections.length; i++ ) {
        if (Collections[i].projectName.toLowerCase().includes(itemSearch.toLowerCase())) {
            collections.push(
                <Link to={`/collection/${Collections[i].projectName}`} className='collections' style={{padding: '10px 40px 0px 10px'}}>
                    <div className='project-title'>
                        <img src={Collections[i].profile} alt={Collections[i].profile} style={{width: '70px'}} />
                        <img id='blockchain' src={Ethicon} alt="eth icon" />
                        <h2>{Collections[i].projectName}</h2>
                    </div>
                    <div className='project-details'>
                        <div className='project-actions'>
                            <p>Volume:</p>
                            <h2>{Collections[i].volume}</h2>
                        </div>
                        <div className='project-actions'>
                            <p>Floor Price:</p>
                            <h2>{Collections[i].floorPrice}</h2>
                        </div>
                        <div className='project-actions'>
                            <p>Total Supply:</p>
                            <h2>{Collections[i].supply}</h2>
                        </div>
                    </div>
                </Link>
            );
        }
    }

    for ( let i = 0; i < Users.length; i++ ) {
        if (Users[i].nickname.toLowerCase().includes(itemSearch.toLowerCase())) {
            users.push(
                <Link to={`/viewprofile/${Users[i].username}`} className='suggested-user'>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img src={Users[i].profilePicture} alt="profilepic" />
                            <div>
                                <h3>{Users[i].nickname}</h3>
                                <p className='text-muted'>{Users[i].username}</p>
                            </div>
                        </div>
                        <div className='buttons'>
                            <button>Follow</button>
                            <Link to={`/viewprofile/${Users[i].username}`}>
                                <button>View Profile</button>
                            </Link>
                        </div>
                    </div>
                </Link>
            );
        }
    }

    return (
        <>
            <NavBar />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="search-result">
                    <h1>Search Result for: {itemSearch}</h1>
                    <div className="searched-collection">
                        <h2 style={{margin: '20px 0px'}}>Collections:</h2>
                        { collections.length !== 0 ? collections : <h3 style={{fontWeight: '100'}}>Nothing to show here!</h3> }
                    </div>
                    <div className="searched-user">
                        <h2 style={{margin: '20px 0px'}}>Users:</h2>
                        { users.length !== 0 ? users : <h3 style={{fontWeight: '100'}}>Nothing to show here!</h3> }
                    </div>
                </div>
                <LeftSidePanel />
            </div>
        </>
    );
}

export default SearchPage;