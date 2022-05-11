import '../App.css';

import NavBarLeft from '../components/NavBarLeft';
import NavBarTop from '../components/NavBarTop';
import Header from '../components/Header';
import Footer from '../components/Fooder';

function Home() {
  return (
    <div className='row'>
      <NavBarLeft></NavBarLeft>
      <div className='col-10 start-3 box-header'>
        <NavBarTop></NavBarTop>
        <Header></Header>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
