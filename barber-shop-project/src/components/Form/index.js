import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  border-bottom: 1px solid #b8860b;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #444658;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    number:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <FormContainer>
      <h2>Fale Conosco</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="message"
          placeholder="Mensagem"
          value={formData.message}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="telefone"
          placeholder="Telefone para contato"
          value={formData.telefone}
          onChange={handleChange}
          pattern="[0-9]*"
        />
        <Button type="submit">Enviar</Button>
      </form>
    </FormContainer>
  );
};

export default Form;