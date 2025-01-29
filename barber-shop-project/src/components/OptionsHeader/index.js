import styled from 'styled-components';

const Option = styled.li`
    list-style: none;
    font-size: 16px;
    min-width: 120px;
    max-height: auto;
    height: 100%;
    padding: 0 15px;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center; 
    justify-content: center; 

`

const Options = styled.ul`
    display: flex;
    color: black;
`

const textOptions = ['HOME','GALERIA', 'SERVIÇOS','ASSINATURAS','CONTATO',];

function OptionsHeader() {
  return (
<header className="App-header">
<Options>
  { textOptions.map((text) => (
    <Option><p>{text}</p></Option>
  ))}
</Options>
</header>
  );
}

export default OptionsHeader;