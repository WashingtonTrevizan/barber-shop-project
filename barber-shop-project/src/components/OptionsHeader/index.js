import './style.css';

const textOptions = ['HOME', 'SERVIÇOS', 'LOCALIZAÇÃO','CONTATO'];

function OptionsHeader() {
  return (
<header className="App-header">
<ul className='options'>
  { textOptions.map((text) => (
    <li className='option'><p>{text}</p></li>
  ))}
</ul>
</header>
  );
}

export default OptionsHeader;