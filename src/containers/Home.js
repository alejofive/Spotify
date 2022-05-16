import '../App.css';

import NavBarLeft from '../components/NavBarLeft';
import NavBarTop from '../components/NavBarTop';
import Songs from '../components/Songs';
import Footer from '../components/Fooder';

function Home() {
  return (
    <div className='row'>
      <NavBarLeft></NavBarLeft>
      <div className='col-10 start-3 box-header'>
        <NavBarTop></NavBarTop>
        <Songs></Songs>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
