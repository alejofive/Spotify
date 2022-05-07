import './App.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBookmark, faSquarePlus, faHeart, faAngleLeft, faAngleRight, faPlay } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useState } from 'react';
import { faFacebook, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function App() {

  const [songs, setSongs] = useState([])
  useEffect(() => {
    const API = async () => {
      const response = await fetch("https://api.audioboom.com/channels/recommended?category_ids[]=176")
      const data = await response.json()
      const songsAux = data.body.map(item => {
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          image: item.urls.logo_image.original,
        }
      })
      setSongs(songsAux)
    }
    API()
  }, [])


  return (

    <header className='row'>
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
        <div className='spane-nav'></div>
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

        <section className='box-header box-home'>


          <div className='box-potcas'>
            <h1>Everything</h1>
            <div className='row gap20 box-cards '>
              {songs.map(item => (

                <a href="" className='col-2 item-card'>
                  <div className='item-card-shadow'>
                    <img src={item.image} alt="" />
                    <div className="circle-play-card circle-play ">
                      <a href=""> <FontAwesomeIcon icon={faPlay} /></a>
                    </div>
                    <div className='box-text-card'>
                      <h3>{item.title}</h3>
                      <p>{item.description} </p>
                    </div>
                  </div>
                </a>

              ))}
            </div>
          </div>
        </section>


        <section className='footer col-10 start-3'>
          <div className='row gap20 footer-box'>
            <div className='flex'>
              <div className='col-3 footer-item'>
                <h3>COMPANY</h3>
                <div className='footer-text'>
                  <a href="#">About</a>
                  <a href="#">Jobs</a>
                  <a href="#">For the Record</a>
                </div>
              </div>
              <div className='col-3 footer-item'>
                <h3>COMMUNITIES</h3>
                <div className='footer-text'>
                  <a href="#">For Artists</a>
                  <a href="#">Developers</a>
                  <a href="#">Advertising</a>
                  <a href="#">Investors</a>
                  <a href="#">Vendors</a>
                </div>
              </div>
              <div className='col-3 footer-item'>
                <h3>USEFUL LINKS</h3>
                <div className='footer-text'>
                  <a href="#">Support</a>
                  <a href="#">Free Mobile App</a>
                </div>
              </div>
            </div>
            <div className='col-3 circle-footer-box'>
              <div className='circle-footer'>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              </div>
              <div className='circle-footer'>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              </div>
              <div className='circle-footer'>
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              </div>
            </div>
          </div>

          <div className='col-12 box-footer-bottom'>
            <div>
              <a href="#">Legal</a>
              <a href="#">Privacy Center</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookies</a>
              <a href="#">About Ads</a>
            </div>
            <div>
              <p>© 2022 Spotify AB</p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default App;
