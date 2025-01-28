import Logo from '../Logo/index.js';
import OptionsHeader from '../OptionsHeader/index.js';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OptionsHeader/>
        </HeaderContainer>
    )
 }
 export default Header