import logo from '../../image/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`

    display: flex;
    font-size: 30px;
    align-items: center;
    max-height: 70px;

`

const LogoImg = styled.img`

    max-width: 70px;
    max-height: 70px;
    margin: 0px 10px 0px 10px;

`

function Logo() {
    return (
        <LogoContainer>
        <LogoImg src={logo} alt="logo da barbearia" className="logo-img"></LogoImg>
        <p><strong>BAZB</strong>BUER</p>
        </LogoContainer>
    );
}

export default Logo;