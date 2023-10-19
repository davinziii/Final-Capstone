import './Activity.css';
import Ethicon from '../../assets/images/ethicon.png';
import Rebel from '../../assets/images/rebel.jpg';

function Activity() {
    // Just for repeating NFT card 
    const boughtNFT = [];
    const NFTSamplePictures = ['https://i.seadn.io/gcs/files/c767652773810a68e7c5c76eb73d8d2f.png?auto=format&w=1000', 'https://i.seadn.io/gcs/files/4d62b93c62b3c0e3c7d5b69f67d18bec.png?auto=format&w=384', 'https://i.seadn.io/gcs/files/b43ea8f8e727dbe9f885b2db479c570a.png?auto=format&w=384', 'https://i.seadn.io/gcs/files/861d8c64c9205af50faac2b1a9994479.png?auto=format&w=384', 'https://i.seadn.io/gcs/files/78067fad93159fdf4cb9c7b8acf4e845.png?auto=format&w=384', 'https://i.seadn.io/gcs/files/d1b714ea991c2aee0077f5d5627c7819.png?auto=format&w=384']
    
    for ( let i = 0; i < 6; i++ ) {
        boughtNFT.push(
            <div className='nft'>
                <img src={NFTSamplePictures[i]} style={{width: '230px'}} alt="rebel" />
                <h4 style={{padding: '4px 10px'}}>Azuki #{Math.floor(Math.random() * (9000) + 1000)}</h4>
                <div className='history'>
                    <div>
                        <p className='text-muted'>Bought at:</p>
                        <h4>12 ETH</h4>
                    </div>
                    <div>
                        <p className='text-muted'>Current Floor:</p>
                        <h4>15.5 ETH</h4>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div> 
            <div className='activity'>
                <div className='profits'>
                    {/* Current Balance */}
                    <div className='wallet'>
                        <p className='text-muted'>Current Balance:</p>
                        <div className='balance' style={{display: 'flex'}}>
                            <img src={Ethicon} alt="eth icon" />
                            <h1>7.42 ETH</h1>
                            <span className='price-action'><i class="fa-solid fa-arrow-trend-up"></i> 5.42%</span>
                        </div>
                        <p className='in-dollars'>$14504.76</p>
                    </div>
                    {/* Total Wallet Balance */}
                    <div className='wallet'>
                        <p className='text-muted'>Total Balance:</p>
                        <div className='balance' style={{display: 'flex'}}>
                            <img src={Ethicon} alt="eth icon" />
                            <h1>100.42 ETH</h1>
                            <span className='price-action'><i class="fa-solid fa-arrow-trend-up"></i> 5.42%</span>
                        </div>
                        <p className='in-dollars'>$191952.75</p>
                    </div>
                    <div className='buttons'>
                        <button>Withdraw</button>
                        <button>Deposit</button>
                        <button>Change Wallet</button>
                    </div>
                </div>
                <div className='recent-purchase'>
                    <h2>Recent Purchase/s</h2>
                    <div className='bought-nft'>
                        {boughtNFT}
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Activity;