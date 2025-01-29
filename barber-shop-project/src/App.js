import Header from './components/Header';
import styled from 'styled-components';
import Carousel from './components/carousel';
import Card from './components/Card';
import SectionContainer from './components/Container';
import Form from './components/Form';

const AppContainer = styled.div`
      width: 100%;
      height: 100%;
      background-image: linear-gradient(180deg, #a69dbe 0%, #444658 100%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Carousel />
      <SectionContainer>
      <Card />
      <Card />
      <Card />
      </SectionContainer>
      <Form/>
    </AppContainer>

  );
}

export default App;
