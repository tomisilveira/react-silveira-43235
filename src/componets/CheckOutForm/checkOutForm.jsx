import React, { useState } from 'react';
import './checkoutForm.css';
import Button from 'react-bootstrap/Button';

const CheckOutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <div className="CheckOutForm">
      <form onSubmit={handleConfirm} className="Form">
        <label htmlFor="name">Nombre</label>
        <input
          className="input"
          type="text"
          id="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />

        <label htmlFor="phone">Teléfono</label>
        <input
          className="input"
          type="text"
          id="phone"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          className="input"
          type="text"
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />

        <Button type="submit" className="Button">
          Crear Orden
        </Button>
      </form>
    </div>
  );
};

export default CheckOutForm;