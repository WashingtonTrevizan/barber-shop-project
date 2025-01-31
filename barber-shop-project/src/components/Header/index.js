import Logo from '../Logo';
import OptionsHeader from '../OptionsHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 0 16px;
    box-shadow: 0 4px 2px -2px gray;
    border-bottom: 2px solid #ccc;

    @media (max-width: 768px) {
    justify-content: center;
  }
`;

const MobileOptionsHeader = styled(OptionsHeader)`
    @media (max-width: 768px) {
        display: flex;
        justify-content: f;
        width: auto;
        
        & > *:not(:first-child) {
            display: none;
        }
    }
`;

const HeaderOptions = styled.div`
  display: flex;
  align-items: center;

`;

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <HeaderOptions>
            <MobileOptionsHeader/>
            </HeaderOptions>
        </HeaderContainer>
    )
}

export default Header;