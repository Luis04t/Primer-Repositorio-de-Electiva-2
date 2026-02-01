import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Productos from './components/Productos';

function App() {
  const [vista, setVista] = useState('productos');

  return (
    <>
      <Navbar onProductos={() => setVista('productos')} />
      <div className="container mt-4">
        {vista === 'productos' && <Productos />}
      </div>
    </>
  );
}

export default App;
