import NFTCard from './NFTCard';
import './CollectionList.css';
import { useState } from 'react';

function CollectionList(props) {
    const nfts = [];
    const [selectedOption, setSelectedOption] = useState("low-to-high");
    const { nftCard, collectionName } = props.collection;

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    for ( let i = 0; i < 40; i++ ) {
        nfts.push(
            <NFTCard collection={{nftCard, collectionName}}/>
        );
    }
        
    return (
        <div className='collection'>
            <div className='sort-filter'>
                {/* <button><i class="fa-solid fa-filter"></i> Filter</button> */}
                <select id="sort-select" value={selectedOption} onChange={handleSelectChange}>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                    <option value="most-rare">Most Rare</option>
                    <option value="most-common">Most Common</option>
                </select>
                <form>
                    <input id='search-nft' type="text" name='search-nft' placeholder='Search for NFTs...' />
                </form>
            </div>
            <div className='collection-list'>
                {nfts}
            </div>
        </div>
    );
}

export default CollectionList;