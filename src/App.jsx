import './assets/stylesheet/App.css';
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import ArtDetailPage from './pages/ArtDetailPage';
import ArtListingPage from './pages/ArtListingPage';
import NewsFeedPage from './pages/NewsFeedPage';
import ViewProfilePage from './pages/ViewProfilePage';
import SearchPage from './pages/SearchPage';
import Profilepic from './assets/images/profilepic.jpg';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { createContext, useRef, useState } from 'react';

const UserContext = createContext();

function App() {
    const [userLog, setUserLog] = useState({profilePicture: Profilepic, banner: 'https://f8n-production.imgix.net/creators/profile/44tkr76wo-foundation-logo-png-ppx12a.png?auto=format%2Ccompress&q=70&max-h=340&max-w=2000&fit=crop',nickname: 'Dav1n', username: '@dav1nnn', bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi odit soluta consectetur voluptatem eos facere eveniet illum, natus dolorem adipisci.', twitterName: 'https://twitter.com/davvv1n', instagramName: 'https://instagram.com/davinziy', discordLink: '', linkedIn: ''});
    const scrollBottom = useRef(null);
    const scrollTop = useRef(null);
    const scrollCollection = useRef(null);

    return (
        <UserContext.Provider value={{userLog, setUserLog, scrollBottom, scrollCollection, scrollTop}}>
            <Router>
                <Routes>
                    <Route exact path='/' element={<HomePage />}></Route>
                    <Route exact path='/home' element={<HomePage />}></Route>
                    <Route exact path='/profile/:username' element={<UserProfilePage />}></Route>
                    <Route exact path='/viewprofile/:username' element={<ViewProfilePage />}></Route>
                    <Route exact path='/newsfeed' element={<NewsFeedPage />}></Route>
                    <Route exact path='/search_result/:itemSearch' element={<SearchPage />}></Route>
                    <Route exact path='/item/:collectionName' element={<ArtDetailPage />}></Route>
                    <Route exact path='/collection/:collectionName' element={<ArtListingPage />}></Route>
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}

export {App, UserContext};