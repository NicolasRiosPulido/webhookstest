import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  const handleClick = async () => {
    const result = await axios.get('https://wcbkctlgn3.execute-api.us-east-2.amazonaws.com/dev/new?id=test4&tipo=Compra')
    const { data: { data: { tipo } } } = result
    alert('El evento es: ' + JSON.stringify(tipo))
  }
  const handleSubmit = async () => {
    const result = await axios.get('https://wcbkctlgn3.execute-api.us-east-2.amazonaws.com/dev/new?id=test4&tipo=Landing')
    const { data: { data: { tipo } } } = result
    alert('El evento es: ' + JSON.stringify(tipo))
  }
  useEffect(() => {
    handleSubmit()
  }, [])

  return (
    <div className='contenedor'>
      <h1>test webhook</h1>
      <button onClick={handleClick}>Comprar</button>
    </div>
  );
}

export default App;
