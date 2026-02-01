import React, { useState } from 'react';
import ProductoForm from './ProductoForm';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarForm, setMostrarForm] = useState(false);
  const [productoEditar, setProductoEditar] = useState(null);

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const eliminarProducto = (id) => {
    if (window.confirm('¿Está seguro de eliminar este producto?')) {
      setProductos(productos.filter(p => p.id !== id));
    }
  };

  return (
    <>
      {!mostrarForm && (
        <>
          <h2>Productos</h2>
          <p className="text-muted">Gestión de productos del inventario</p>

          <div className="row mb-3">
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Buscar por nombre..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
            <div className="col-md-6 text-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setProductoEditar(null);
                  setMostrarForm(true);
                }}
              >
                Nuevo producto
              </button>
            </div>
          </div>

          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productosFiltrados.map(p => (
                <tr key={p.id}>
                  <td>{p.nombre}</td>
                  <td>${p.precio}</td>
                  <td>{p.cantidad}</td>
                  <td>{p.estado}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => {
                        setProductoEditar(p);
                        setMostrarForm(true);
                      }}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => eliminarProducto(p.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {mostrarForm && (
        <ProductoForm
          productos={productos}
          setProductos={setProductos}
          productoEditar={productoEditar}
          onCancelar={() => setMostrarForm(false)}
        />
      )}
    </>
  );
}
