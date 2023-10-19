import { useContext, useState } from 'react';
import './Post.css';
import { UserContext } from '../../App';

function Post(props) {
    const { post } = props.info;
    const [like, setLike] = useState(1);

    return (
        <div className='post-info'>
            <div className='user-info'>
                <img src={post.userProfile} alt="" />
                <div>
                    <h3 style={{marginTop: '6px'}}>{post.userNickname}</h3>
                    <p>{post.username}</p>
                </div>
            </div>
            <p id='caption'>{post.caption}</p>
            <div className='img-posted' >
                {post.picture ? <img src={post.picture} alt="" /> : ""}
                <div className='buttons'>
                    <button onClick={() => {setLike(like === 1 ? 0 : 1)}}><i class={`fa-heart ${like === 1 ? 'far' : 'fas'} ${like === 1 ? '' : 'pulse'}`}></i> Like</button>
                    <button><i class="fa-regular fa-share-from-square"></i> Share</button>
                </div>
            </div>
        </div>
    );
}

export default Post;