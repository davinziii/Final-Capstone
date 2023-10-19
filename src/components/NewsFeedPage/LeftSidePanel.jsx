import './LeftSidePanel.css';
import SuggestedUser from './SuggestedUser';
import Users from '../../utils/HardCodedUsers.js';

function LeftSidePanel() {
    
    return (
        <div className='suggestions'>
            <h2>You might follow</h2>
            {Users.map((user, index) => (
                <SuggestedUser users={{user}}/>
            ))}
        </div> 
    );
}

export default LeftSidePanel;