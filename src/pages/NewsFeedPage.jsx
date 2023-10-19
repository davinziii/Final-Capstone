import Header from '../components/Header';
import FeedPanel from '../components/NewsFeedPage/FeedPanel';
import LeftSidePanel from '../components/NewsFeedPage/LeftSidePanel';
import '../assets/stylesheet/NewsFeed.css';

function NewsFeedPage() {
    return (
        <>
            <Header />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <FeedPanel />
                <LeftSidePanel />
            </div>
        </>
    );
}

export default NewsFeedPage;