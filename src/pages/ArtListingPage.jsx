import Header from '../components/Header';
import ProjectInfo from '../components/ArtListingPage/ProjectInfo';
import CollectionList from '../components/ArtListingPage/CollectionList';
import NFTs from '../utils/HardCodedNFT';
import { useParams } from 'react-router-dom';

function ArtListingPage() {
    const { collectionName } = useParams();
    let nftCard = {};

    for ( let i = 0; i < NFTs.length; i++ ) {
        if (collectionName === NFTs[i].projectName) {
            nftCard = NFTs[i].NFT;
        }
    }

    return (
        <div>
            <Header />
            <ProjectInfo collection={{collectionName}} />      
            <CollectionList collection={{nftCard, collectionName}} />
        </div>
    );
}

export default ArtListingPage;