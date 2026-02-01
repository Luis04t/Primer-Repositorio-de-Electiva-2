import React from 'react';

export default function Navbar({ onProductos }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">Inventario</span>
        <button
          className="btn btn-outline-light"
          onClick={onProductos}
        >
          Productos
        </button>
      </div>
    </nav>
  );
}
