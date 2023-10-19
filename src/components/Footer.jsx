import '../assets/stylesheet/Footer.css';
import CosmicLogo from '../assets/images/logowhite.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../App';

function Footer() {
    const { scrollBottom } = useContext(UserContext);

    return (
        <div className='learn-more' ref={scrollBottom}>
            <div className='cosmos-socials'>
                <img id='logo' src={CosmicLogo} alt="cosmic logo" />
                <div className='socials'>
                    <Link to='https://twitter.com/'>
                        <button><i class="fa-brands fa-twitter fa-2xl"></i></button>
                    </Link>
                    <Link to='https://instagram.com/'>
                        <button><i class="fa-brands fa-instagram fa-2xl"></i></button>
                    </Link>
                    <Link to='https://discord.com/'>
                        <button><i class="fa-brands fa-discord fa-2xl"></i></button>
                    </Link>
                    <Link to='https://linkedin.com/'>
                        <button><i class="fa-brands fa-linkedin fa-2xl"></i></button>
                    </Link>
                </div>
            </div>
            <div className='newsletter'>
                <div className='footer-content'>
                    <p>Support</p>
                    <a href='#'>Contact Us</a>
                    <a href='#'>FAQ</a>
                    <a href='#'>Documentation</a>
                    <a href='#'>Help Center</a>
                </div>
                <div className='footer-content'>
                    <p>Marketplace</p>
                    <a href='#'>Art</a>
                    <a href='#'>PFP's</a>
                    <a href='#'>Gaming</a>
                    <a href='#'>NFT's</a>
                </div>
                <div className='footer-content'>
                    <p>My Account</p>
                    <a href='#'>Profile</a>
                    <a href='#'>Collection</a>
                    <a href='#'>Settings</a>
                </div>
                <div className='footer-content'>
                    <p>Blockchains</p>
                    <a href='#'>Bitcoin</a>
                    <a href='#'>Ethereum</a>
                    <a href='#'>Solana</a>
                    <a href='#'>Matic</a>
                </div>
                <form>
                    <p>Subscribe to newsletter</p>
                    <input id='email' type="text" placeholder='Email'/>
                    <button id='submit' type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Footer;