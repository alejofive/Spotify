import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBookmark, faSquarePlus, faHeart, faAngleLeft, faAngleRight, faPlay, faEllipsis, faClock, } from '@fortawesome/free-solid-svg-icons'
import banner from '../src/components/img/foto9.jpg'




function Playlist() {
  return (
    <div className='row'>
      <div className='col-2 box-menu'>
        <div className='logo'>

          <h1>Spotify</h1>
        </div>

        <div className='menu-home'>
          <div className='menu-item'>
            <FontAwesomeIcon icon={faHome} />
            <a className='activa' href="">Home</a>
          </div>

          <div className='menu-item'>
            <FontAwesomeIcon icon={faSearch} />
            <a href="">Search</a>
          </div>

          <div className='menu-item'>
            <FontAwesomeIcon icon={faBookmark} />
            <a href="">You library</a>
          </div>
        </div>

        <div className='menu-create'>
          <div className='menu-item'>
            <FontAwesomeIcon icon={faSquarePlus} />
            <a href="">Create playlist</a>
          </div>

          <div className='menu-item'>
            <FontAwesomeIcon icon={faHeart} />
            <a href="">Liked Songs</a>
          </div>
        </div>

        <div className='text-menu-end'>
          <a href="">Cookies</a>
          <a href="">Privacy</a>
        </div>
      </div>


      <div className='col-10 start-3 box-header'>
        <div className='box-nav'>
          <div className='nav-arrow'>
            <a href=""> <FontAwesomeIcon icon={faAngleLeft} /></a>
            <a href=""> <FontAwesomeIcon icon={faAngleRight} /></a>
          </div>

          <div className='box-btn-text'>
            <nav className='nav-text'>
              <a href="">PREMIUM</a>
              <a href="">SOPPORT</a>
              <a href="">DOWNLOAD</a>
              <a href="">SIGN UP</a>
            </nav>

            <button>LOGIN IN</button>
          </div>

        </div>

        <section className='box-home box-home-playlist'>
          <div className='box-banner'>
            <img src={banner} alt="" />
            <div className='banner-text'>
              <p>PLAYLIST</p>
              <h1>TITLE</h1>
              <div className='banner-span'>
                <span>Podcast - True Crime Obsessed</span>
                <span> Spotif 4,837,048 likes 306 songs, 2 hr 59 min</span>
              </div>
            </div>
          </div>

          <div className='box-playlist'>
            <div className='box-item'>
              <div className='circle-play'>
                <a href=""> <FontAwesomeIcon icon={faPlay} /></a>
              </div>
              <button><FontAwesomeIcon icon={faHeart} /></button>
              <button> <FontAwesomeIcon icon={faEllipsis} /></button>
            </div>
          </div>

          <div className='box-playlist-audio box-playlist'>
            <div className='row head-playlist box-text-playlist'>
              <div className='col-5 playlist-text-title'>
                <p>#</p>
                <p>TITLE</p>
              </div>
              <div className='col-3'>
                <p>CHANNEL</p>
              </div>
              <div className='col-2'>
                <p>DATE ADDED</p>
              </div>
              <div className='col-2'>
                <p><FontAwesomeIcon icon={faClock} /></p>
              </div>
            </div>
            <div className='row box-table'>
              <div className='col-5'>
                <div className='playlist-table color-p'>
                  <span>1</span>
                  <a href=""><FontAwesomeIcon icon={faPlay} /></a>
                  <img src={banner} alt="" />
                  <p>Autor</p>
                </div>
              </div>
              <div className='col-3 color-p'>
                <div>
                  <p>True Crime Obsessed</p>
                </div>
              </div>
              <div className='col-2 color-p'>
                <p>a day ago</p>
              </div>
              <div className='col-2 color-p'>
                <p>46:31</p>
              </div>
            </div>

            <div className='row box-table'>
              <div className='col-5'>
                <div className='playlist-table color-p'>
                  <span>1</span>
                  <a href=""><FontAwesomeIcon icon={faPlay} /></a>
                  <img src={banner} alt="" />
                  <p>Autor</p>
                </div>
              </div>
              <div className='col-3 color-p'>
                <div>
                  <p>True Crime Obsessed</p>
                </div>
              </div>
              <div className='col-2 color-p'>
                <p>a day ago</p>
              </div>
              <div className='col-2 color-p'>
                <p>46:31</p>
              </div>
            </div>
          </div>
        </section>
      </div>


      <footer className='row'>

      </footer>
    </div>
  );
}

export default Playlist;
