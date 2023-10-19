import './FeedPanel.css';
import Post from './Post';
import { UserContext } from '../../App';
import { useContext, useEffect, useState } from 'react';

function FeedPanel() {
    const { userLog } = useContext(UserContext)
    const [characterCount, setCharacterCount] = useState(0);
    const [caption, setCaption] = useState('');
    const [picture, setPicture] = useState(null);
    const [posts, setPosts] = useState([]);

    // This auto adjust the textarea
    const handleInput = (event) => {
        const element = event.target;
        element.style.height = 'auto';
        element.style.height = element.scrollHeight + 'px';
    };

    // To count counter and set the value of the post
    const characterCounter = (e) => {
        // Set Post is the value of what is the user posting
        setCaption(e.target.value);
        setCharacterCount(e.target.value.length);
    }

    // Display uploaded photo
    const handleUpload = (e) => {
        const files = e.target.files;
        const reader = new FileReader();
        if (files.length > 0) {
            const file = files[0];

            reader.onload = () => {
                setPicture(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPicture(null);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPosts(prevPosts => [{ userProfile: userLog.profilePicture, username: userLog.username, userNickname: userLog.nickname, caption: caption, picture: picture }, ...prevPosts]);

        setCharacterCount(0);
        setCaption('');
        setPicture(null);
    }

    useEffect(() => {
        if (posts.length !== 0) {
            localStorage.setItem('compiled-post', JSON.stringify(posts));
        }
    }, [posts])

    useEffect(() => {
        const compiledPost = JSON.parse(localStorage.getItem('compiled-post'));
        
        if (compiledPost) {
            setPosts(compiledPost);
        }
    }, []) 

    return (
        <div className="feed">
            <div className="write-post">
                <div className='user-post'>
                    <img id='profile' src={userLog.profilePicture} alt="" />
                    <form style={{width: '100%'}} onSubmit={handleSubmit}>
                        <textarea id='post-input' type="text" name="post" placeholder='Write a post...' onInput={handleInput} value={caption} onChange={characterCounter} maxLength={350}/>
                        <p id={`${characterCount === 350 ? 'red' : characterCount >= 250 ? 'orange' : ''}`} className='text-muted' style={{textAlign: 'end', marginRight: '10px'}}>{characterCount}/350</p>
                        {picture !== null ? 
                        <div className='display-photo'>
                            <img src={picture} alt="" height={150} />
                            <button onClick={() => setPicture(null)}>X</button>
                        </div> :
                        ""}
                        <div className='buttons'>
                            <div>
                                <label htmlFor="image-upload"><i className="fa-solid fa-image"></i> Image</label>
                                <label htmlFor="video-upload"><i className="fa-solid fa-video"></i> Video</label>
                                <label htmlFor="attachment-upload"><i className="fa-solid fa-paperclip"></i> Attachment</label>
                            </div>
                            <button type='submit'>Post</button>
                            <input id="image-upload" type="file" name="image" style={{ display: 'none' }} onChange={handleUpload}/>
                            <input id="video-upload" type="file" name="video" style={{ display: 'none' }} />
                            <input id="attachment-upload" type="file" name="attachment" style={{ display: 'none' }} />
                        </div>
                    </form>
                </div>
            </div>
            <div className='compiled-post'>
                {posts.map((post, index) => (
                    <Post info={{post}} key={index} />
                ))}
            </div>
        </div>
    );
}

export default FeedPanel;