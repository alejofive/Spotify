import {
  Link,
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBookmark, faSquarePlus, faHeart } from '@fortawesome/free-solid-svg-icons'

function NavBarLeft() {
  return (
    <div className='col-2 box-menu'>
      <div className='logo'>
        <img src="../img/logo.f48fb565509bf23854a8.png" alt="" />
      </div>

      <div className='menu-home'>
        <Link to='/' className='menu-item'>
          <FontAwesomeIcon icon={faHome} />
          <a className='activa' href="">Home</a>
        </Link>

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
  );
}

export default NavBarLeft;
