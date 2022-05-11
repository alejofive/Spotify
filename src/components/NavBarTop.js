

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

function NavBarTop() {
  return (
    <div>
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
    </div>
  );
}

export default NavBarTop;