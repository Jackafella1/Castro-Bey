import {useState} from 'react';
import heroImage from '../images/hero-image.webp';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);

};


  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <h1>Castro Bey</h1>
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
           >
            <span></span>
            <span></span>
            <span></span>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button> 
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#music" onClick={toggleMenu}>Music</a></li>
            <li><a href="#videos" onClick={toggleMenu}>Videos</a></li>
            <li><a href="#shows" onClick={toggleMenu}>Shows</a></li>
            <li><a href="#store" onClick={toggleMenu}>Store</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#booking" onClick={toggleMenu}>Booking</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div>
          <h2>Castro Bey</h2>
          <p>Conscious Hip-Hop from Derby</p>
          <div className="social-links">
            <a href="https://open.spotify.com/artist/0919YgSuM4uWtYaSeKgDJ4?web=true" target="_blank" rel="noopener noreferrer">Spotify</a>
            <a href="https://www.instagram.com/castro_13ey/?hl=en-gb" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music">
        <div className="container">
          <h2>Music</h2>
          <div className="grid">
            <div className="card">
              <h3>Track Name</h3>
              <p>Available on Spotify</p>
              <a href="#">Listen Now</a>
            </div>
          </div>
          <p className="placeholder">Replace with Spotify embed or track links from Strapi</p>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos">
        <div className="container">
          <h2>Videos</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/IGbaxY9nxVc"
              title="Castro Bey Music Video"
              allowFullScreen
            ></iframe>
            <p className="placeholder">Replace with Castro Bey’s YouTube/Vimeo video URL from Strapi</p>
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows">
        <div className="container">
          <h2>Upcoming Shows</h2>
          <div className="grid">
            <div className="card">
              <h3>Derby Live</h3>
              <p>Date: TBD</p>
              <p>Location: Derby, UK</p>
              <a href="#">Get Tickets</a>
            </div>
          </div>
          <p className="placeholder">Replace with Castro Bey’s event details from Strapi</p>
        </div>
      </section>

      {/* Store Section */}
      <section id="store">
        <div className="container">
          <h2>Store</h2>
          <p className="lead">Support Castro Bey by purchasing music directly from Bandcamp.</p>
          <div className="bandcamp-grid">
            <div className="bandcamp-card">
              <iframe
                style={{ border: 0, width: '100%', height: '470px' }}
                src="https://bandcamp.com/EmbeddedPlayer/album=76880944/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                seamless
                title="2 Moorish by Castro Bey"
              >
                <a href="https://castrobey.bandcamp.com/album/2-moorish">2 Moorish by Castro Bey</a>
              </iframe>
              <button className="buy-now">
                <a href="https://castrobey.bandcamp.com/album/2-moorish" target="_blank" rel="noopener noreferrer">Buy Now</a>
              </button>
            </div>
            <div className="bandcamp-card">
              <iframe 
              style={{ border: 0, width: '100%', height: '470px', }}
              src="https://bandcamp.com/EmbeddedPlayer/album=827681123/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" 
              seamless
              title="Bey Prints instrumentals Vo 1"
              >
                <a href="https://castrobey.bandcamp.com/album/bey-prints-instrumentals-vol1">Bey Prints Instrumentals Vol1 by Castro Bey Productions</a>
                </iframe>
                <button className="buy-now">
                <a href="https://castrobey.bandcamp.com/album/bey-prints-instrumentals-vol1" target="_blank" rel="noopener noreferrer">Buy Now</a>
              </button>
            
            </div>
            <div className="bandcamp-card">
              <iframe
                style={{ border: 0, width: '100%', height: '470px' }}
                src="https://bandcamp.com/EmbeddedPlayer/album=313216474/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                seamless
                title="Bey Prints Instrumentals Vol 2 by Castro Bey Recordings"
              >
                <a href="https://castrobey.bandcamp.com/album/bey-prints-instrumentals-vol-2">Bey Prints Instrumentals Vol 2 by Castro Bey Recordings</a>
              </iframe>
              <button className="buy-now">
                <a href="https://castrobey.bandcamp.com/album/bey-prints-instrumentals-vol1" target="_blank" rel="noopener noreferrer">Buy Now</a>
              </button>

            </div>
          </div>
          <p className="bandcamp-cta">
            Visit <a href="https://castrobey.bandcamp.com/" target="_blank" rel="noopener noreferrer">Castro Bey’s Bandcamp</a> for more music and exclusive merch!
          </p>
        </div>
      </section>

               
      {/* About Section */}
      <section id="about">
        <div className="container">
          <h2>About Castro Bey</h2>
          <div className="content">
            <p>I’m a self-taught music man carrying on the legacy of my grandad "Castro," one of Derby’s finest reggae DJs. My choice of music is conscious hip-hop, aiming to tap into people’s higher selves. I’m an emcee, producer, and engineer, and one of the founding members of the Dredeye Knights, a Derby hip-hop group. I create all my own videos and music, as I just love to create.</p>
            <p>Update bio via Strapi admin panel at https://admin.castrobey.com</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking">
        <div className="container">
          <h2>Book Castro Bey</h2>
          <div className="form-container">
            <p>Want Castro Bey at your event? Hit us up!</p>
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Event Details"></textarea>
              <button>Send Inquiry</button>
            </div>
            <p className="placeholder">Add Castro Bey’s booking email or manager contact from Strapi</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Follow Castro Bey:</p>
        <div className="social-links">
          <a href="https://www.instagram.com/castro_13ey/?hl=en-gb" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://open.spotify.com/artist/0919YgSuM4uWtYaSeKgDJ4?web=true" target="_blank" rel="noopener noreferrer">Spotify</a>
        </div>
        <p>© 2025 Castro Bey. All rights reserved. Powered by castrobey.com</p>
      </footer>
    </div>
  );
};



export default App;


