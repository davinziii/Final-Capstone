import './ProjectInfo.css';
import { Link } from 'react-router-dom';
import Collections from '../../utils/HardCodedCollections';

function ProjectInfo(props) {
    const { collectionName } = props.collection;
    let collection = {};

    for ( let i = 0; i < Collections.length; i++ ) {
        if (collectionName === Collections[i].projectName) {
            collection = Collections[i];
        }
    }

    return (
        <div>
            <div className='project-pictures'>
                <div className='project-banner'>
                    <div className='banner' style={{backgroundImage: `url(${collection.banner})`}}></div>
                </div>
                <img id='project-pic' src={collection.profile} alt="" />
            </div>
            <div className='project-description'>
                <h2>{collection.projectName}</h2>
                <p id='project-text-muted'>Founded by {collection.founder}</p>
                <p id='project-bio'>{collection.bio}</p>
                <div className='project-details'>
                    <div className='project-info'>
                        <div>
                            <h3>{collection.floorPrice}</h3>
                            <p id='project-text-muted'>Floor Price</p>
                        </div>
                        <div>
                            <h3>{collection.volume}</h3>
                            <p id='project-text-muted'>Total Volume</p>
                        </div>
                        <div>
                            <h3>{collection.listed}</h3>
                            <p id='project-text-muted'>Total Listed</p>
                        </div>
                        <div>
                            <h3>{collection.owners}</h3>
                            <p id='project-text-muted'>Owners</p>
                        </div>
                        <div>
                            <h3>{collection.uniqueOwners}</h3>
                            <p id='project-text-muted'>Unique owners</p>
                        </div>
                    </div>
                    <div className='social-links'>
                        <Link to=''>
                            <button id='twitter'><i class="fa-brands fa-twitter"></i></button>
                        </Link>
                        <Link to=''>
                            <button id='instagram'><i class="fa-brands fa-instagram"></i></button>
                        </Link>
                        <Link to=''>
                            <button id='discord'><i class="fa-brands fa-discord"></i></button>
                        </Link>
                        <Link to=''>
                            <button id='linkedin'><i class="fa-brands fa-linkedin"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectInfo;