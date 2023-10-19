import './NFTSection.css';
import Ethicon from '../../assets/images/ethicon.png';
import { Link } from 'react-router-dom';
import Collections from '../../utils/HardCodedCollections';
import { useContext } from 'react';
import { UserContext } from '../../App';

function NFTSection() {
    const { scrollCollection } = useContext(UserContext);

    const newPage = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='nft-section'>
            <div className='buttons'>
                <div className='blockchain-list'>
                    <button><i class="cf cf-btc"></i></button>
                    <button><i class="cf cf-eth"></i></button>
                    <button><i class="cf cf-sol"></i></button>
                    <button><i class="cf cf-matic"></i></button>
                </div>
                <div className='timeframe-list'>
                    <button>1h</button>
                    <button>8h</button>
                    <button>24h</button>
                    <button>7d</button>
                </div>
            </div>
            <div className='collection-lists' ref={scrollCollection}>
                {Collections.map((collection, index) => (
                    <Link to={`/collection/${collection.projectName}`} className='collections' onClick={newPage}>
                        <h3 id='count' style={{marginRight: '10px', color: 'var(--primary)'}}>{index + 1}</h3>
                        <div className='project-title'>
                            <img src={collection.profile} alt="azuki" />
                            <img id='blockchain' src={Ethicon} alt="eth icon" />
                            <h2>{collection.projectName}</h2>
                        </div>
                        <div className='project-details'>
                            <div className='project-actions'>
                                <p>Volume:</p>
                                <h2>{collection.volume}</h2>
                            </div>
                            <div className='project-actions'>
                                <p>Floor Price:</p>
                                <h2>{collection.floorPrice}</h2>
                            </div>
                            <div className='project-actions'>
                                <p>Total Supply:</p>
                                <h2>{collection.supply}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default NFTSection;