import '../index.css';


import NavBarLeft from '../components/NavBarLeft';
import NavBarTop from '../components/NavBarTop';
import Footer from '../components/Fooder';
import HeaderPlaylist from '../components/Playlist';




function Playlist() {
  return (
    <div className='row'>
      <NavBarLeft></NavBarLeft>
      <div className='col-10 start-3 box-header'>
        <NavBarTop></NavBarTop>
        <HeaderPlaylist></HeaderPlaylist>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Playlist;
