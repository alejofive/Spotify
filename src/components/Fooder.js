

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer col-10 start-3'>
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
    </div>
  );
}

export default Footer;