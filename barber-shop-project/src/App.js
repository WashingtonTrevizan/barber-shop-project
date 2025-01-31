import Header from './components/Header';
import styled from 'styled-components';
import Card from './components/Card';
import Form from './components/Form';
import PriceList from './components/PriceList';
import ImageCarousel from './components/ImageCarousel';
import HomeSection from './components/HomeMessage';
import PhotoCard from './components/Gallery';
import ServicePriceComponent from './components/ServicePrice';
import Footer from './components/Footer';
import Background from './image/background-main.svg';
import LocalAndFunc from './components/LocalAndFunc';
import FloatingButton from './components/FloatingButton';

const AppContainer = styled.div`
      width: 100%;
      height: 100%;
      background-image: url(${Background});
      background-size: cover;
      backgroun-repeat: no-repeat;
      `;
function App() {
  return (
    <AppContainer>
    <Header />
    <div id="home">
      <HomeSection />
    </div>
    <ImageCarousel />
    <div id="galeria">
      <PhotoCard />
    </div>
    <div id="equipe">
      <Card />
    </div>
    <div id="servicos">
      <ServicePriceComponent />
    </div>
    <div id="assinaturas">
      <PriceList />
    </div>
    <div id="contato">
      <Form />
    </div>
    <LocalAndFunc />
    <FloatingButton />
    <Footer />
  </AppContainer>


  );
}

export default App;
