import Header from './components/Header';
import styled from 'styled-components';
import Card from './components/Card';
import SContainer from './components/Container';
import Form from './components/Form';
import GoogleMapsLink from './components/GoogleMaps';
import PriceList from './components/PriceList';
import ImageCarousel from './components/ImageCarousel';

const AppContainer = styled.div`
      width: 100%;
      height: 100%;
      background-image: linear-gradient(180deg, #a69dbe 0%, #444658 100%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <ImageCarousel />
      <SContainer>
        <Card />
        <Card />
        <Card />
      </SContainer>F
        <PriceList />
      <SContainer>
        <Form />
        <GoogleMapsLink />
      </SContainer>
    </AppContainer>

  );
}

export default App;
