import Header from './components/Header/index.js';
import styled from 'styled-components';
import Carousel from './components/carousel/index.js';

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(180deg, #a69dbe 0%, #444658 100%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Carousel />
    </AppContainer>
  );
}

export default App;
