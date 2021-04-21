import React from 'react';

function App() {
  const handleClick = () => {
    console.log('click')
  }
  return (
    <div className='contenedor'>
      <h1>test webhook</h1>
      <button onClick={handleClick}>Comprar</button>
    </div>
  );
}

export default App;
