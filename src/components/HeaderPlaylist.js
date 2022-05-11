

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlay, faEllipsis, faClock, } from '@fortawesome/free-solid-svg-icons'
import banner from '../img/foto9.jpg'

function HeaderPlaylist() {
  return (
    <div className='box-home box-home-playlist'>
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
    </div>
  );
}

export default HeaderPlaylist;