import React from 'react';

export const Nav = ({ state, send }) => {
  const goToWelcome = () => {
    send('CANCEL')
  }

  return (
    <nav className='Nav'>
      <h1 className='Nav-logo'>Super Viajes</h1>
      {!state.matches('initial') && !state.matches('tickets') &&
        <button onClick={goToWelcome} className='Nav-cancel button-secondary btn--secondary'>Cancelar</button>
      }
    </nav>
  );
}; 