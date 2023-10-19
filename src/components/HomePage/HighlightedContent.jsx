import './HighlightedContent.css';
import Nguyen from '../../assets/images/nguyen2.gif';
import { useContext } from 'react';
import { UserContext } from '../../App';

function HighlightedContent() {
    const { scrollBottom, scrollCollection } = useContext(UserContext);


    const handleLearnMore = () => {
        if (scrollBottom.current) {
            scrollBottom.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleCollection = () => {
        if (scrollCollection.current) {
            scrollCollection.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="content">
            <div className='content-text'>
                <h1>Cosmos Art Exchange: 
                    <span id='sub-text'>where <span id='art'>art</span> meets <span style={{color: 'var(--primary)'}}>blockchain technology.</span></span>
                </h1>
                <p> Our community of art enthusiasts and collectors is waiting for you to join. Share your favorite pieces, get inspired by others, and expand your knowledge of the art world.</p>
                <button id='button-content' onClick={handleCollection}>View Collections</button>
                <button id='button-content' onClick={handleLearnMore}>Learn More</button>
            </div>
            <img id='clay-nguyen' src={Nguyen} alt="black friday clay" draggable={false} />
        </div>
    );
}

export default HighlightedContent;