import Logo from '../Logo';
import OptionsHeader from '../OptionsHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: flex-start; /* Alinha os itens à esquerda */
    align-items: center;
    padding: 0 16px;
`;

const MobileOptionsHeader = styled(OptionsHeader)`
    @media (max-width: 768px) {
        display: flex;
        justify-content: flex-start; /* Alinha o MobileOptionsHeader à esquerda */
        width: auto;
        
        & > *:not(:first-child) {
            display: none;
        }
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <MobileOptionsHeader/>
            <Logo/>
        </HeaderContainer>
    )
}

export default Header;