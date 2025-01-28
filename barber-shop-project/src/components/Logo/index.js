import logo from '../../image/logo.svg';
import './style.css';

function Logo() {
    return (
        <div className="Logo">
        <img src={logo} alt="logo da barbearia" className="logo-img"></img>
        <p><strong>BAZB</strong>BUER</p>
        </div>
    );
}

export default Logo;