import { Link } from 'react-router-dom';
import './NFTCard.css';

function NFTCard(props) {
    const { nftCard, collectionName } = props.collection;

    return (
        <Link to={`/item/${collectionName}`} className="nft-card">
            <img src={nftCard.nftPicture} alt="" />
            <h3 style={{textAlign: 'center'}}>{collectionName} {nftCard.nftNumber}</h3>
            <div className='nft-details'>
                <div className='nft-price'>
                    <i class="cf cf-eth"></i>
                    <div>
                        <p className='text-muted'>Current Price</p>
                        <h4>{nftCard.currentPrice}</h4>
                    </div>
                </div>
                <div className='nft-last'>
                    <p className='text-muted'>Last Bought</p>
                    <h4>{Math.floor(Math.random() * 6) + 5} ETH</h4>
                </div>
            </div>
        </Link>
    );
}

export default NFTCard;