import Header from './components/Header';
import styled from 'styled-components';
import Card from './components/Card';
import SContainer from './components/Container';
import Form from './components/Form';
import GoogleMapsLink from './components/GoogleMaps';
import PriceList from './components/PriceList';
import ImageCarousel from './components/ImageCarousel';
import HomeSection from './components/HomeMessage';
import PhotoCard from './components/Gallery';
import ServicePriceComponent from './components/ServicePrice';
import Footer from './components/Footer';

const AppContainer = styled.div`
      width: 100%;
      height: 100%;
      background-image: linear-gradient(180deg, #a69dbe 0%, #444658 100%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <HomeSection />
      <ImageCarousel />
      <Card />
      <PhotoCard />
      <ServicePriceComponent />
      <PriceList />
      <SContainer>
        <Form />
        <GoogleMapsLink />
      </SContainer>
      <Footer/>
    </AppContainer>


  );
}

export default App;
