import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

import Banner from '../components/home/banner';
import Top from '../components/home/topsellers';
import Footer from '../components/home/footer';
import Offer from '../components/home/offer';
import Review from '../components/home/review';
function Home(){

  return(
  <>
  
  <Banner></Banner>
  <Top></Top>
  <Offer></Offer>
  <Review></Review>
  <Footer></Footer>
  </>);

  

}
export default Home;