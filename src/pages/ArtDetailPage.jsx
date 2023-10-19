import Header from '../components/Header';
import '../assets/stylesheet/ArtDetailPage.css';
import NFTs from '../utils/HardCodedNFT';
import Collections from '../utils/HardCodedCollections';

import { useParams } from 'react-router-dom';

function ArtDetailPage() {
    const { collectionName } = useParams();
    const attr = [];
    let nftDetails = [];
    let collection = [];

    for ( let i = 0; i < Collections.length; i++ ) {
        if (collectionName === Collections[i].projectName) {
            collection = Collections[i];
        }
    }

    for ( let i = 0; i < NFTs.length ; i ++ ) {
        if ( collectionName === NFTs[i].projectName) {
            nftDetails = NFTs[i].NFT;
        }
    }

    for ( let i = 0; i < nftDetails.traits.length ; i ++ ) {
        attr.push(
            <div className='attribute'>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p className='text-muted'>{nftDetails.traits[i].category}</p>
                    <p id='rarity'>{nftDetails.traits[i].rarity}</p>
                </div>
                <p style={{fontWeight: 'bold'}}>{nftDetails.traits[i].name}</p>
            </div>
        );
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Header />
            <div className='nft-item'>
                <img id='nft-picture' src={nftDetails.nftPicture} alt="" />
                <div className='nft-info'>
                    <div className='nft-name'>
                        <img src={collection.profile} alt="" />
                        <div className='alignment'>
                            <h3>{collectionName} {nftDetails.nftNumber}</h3>
                            <p className='text-muted'>By {collection.founder}</p>
                        </div>
                    </div>
                    <div className='price-bid'>   
                        <div className='listed-price'>
                            <p className='text-muted' style={{fontSize: '14px'}}>Current Price</p>
                            <h2><i class="cf cf-eth"></i> {nftDetails.currentPrice} ETH</h2>
                            <p className='text-muted' style={{fontSize: '14px'}}>${Math.floor(parseInt(nftDetails.currentPrice) * 1855.69)}</p>
                        </div>
                        <div className='listed-price'>
                            <p className='text-muted' style={{fontSize: '14px'}}>Highest Floor Bid</p>
                            <h2><i class="cf cf-eth"></i> 14.5 ETH </h2>
                            <p className='text-muted' style={{fontSize: '14px'}}>by <span>0xasd3...37aa</span></p>
                        </div>
                    </div>
                    <button id='buy'>Buy Now</button>
                    <button id='bid'>Place Bid</button>
                    <div className='nft-prices'>
                        <div>
                            <h3>5.02 ETH</h3>
                            <p className='text-muted'>Last Sold</p>
                        </div>
                        <div>
                            <h3>5%</h3>
                            <p className='text-muted'>Royalty Fee</p>
                        </div>
                        <div>
                            <h3>0xced3....sds2</h3>
                            <p className='text-muted'>Owner</p>
                        </div>
                    </div>
                    <div className='nft-attributes'>
                        <h3>Attributes</h3>
                        <div className='all-attr'>
                            {attr}
                        </div>
                    </div>  
                </div>
                
    
            </div>
        </div>
    );
}

export default ArtDetailPage;