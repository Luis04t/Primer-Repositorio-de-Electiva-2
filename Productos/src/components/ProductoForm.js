import React, { useState } from 'react';

export default function ProductoForm({
  productos,
  setProductos,
  productoEditar,
  onCancelar
}) {
  const [producto, setProducto] = useState(
    productoEditar || {
      nombre: '',
      descripcion: '',
      precio: '',
      costo: 50,
      cantidad: '',
      stockMinimo: '',
      estado: 'Activo'
    }
  );

  const [errores, setErrores] = useState({});

  const validar = () => {
    let e = {};
    if (!producto.nombre) e.nombre = 'El nombre es obligatorio';
    if (!producto.precio) e.precio = 'El precio es obligatorio';
    if (!producto.cantidad) e.cantidad = 'La cantidad es obligatoria';
    setErrores(e);
    return Object.keys(e).length === 0;
  };

  const guardar = () => {
    if (!validar()) return;

    if (productoEditar) {
      setProductos(
        productos.map(p =>
          p.id === productoEditar.id ? { ...producto } : p
        )
      );
    } else {
      setProductos([
        ...productos,
        { ...producto, id: Date.now() }
      ]);
    }
    onCancelar();
  };

  return (
    <>
      <h2>Nuevo Producto</h2>

      <div className="mb-3">
        <label>Nombre del Producto *</label>
        <input
          className="form-control"
          value={producto.nombre}
          onChange={e => setProducto({ ...producto, nombre: e.target.value })}
        />
        {errores.nombre && <small className="text-danger">{errores.nombre}</small>}
      </div>

      <div className="mb-3">
        <label>Descripción</label>
        <textarea
          className="form-control"
          value={producto.descripcion}
          onChange={e => setProducto({ ...producto, descripcion: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label>Precio de Venta *</label>
        <input
          type="number"
          className="form-control"
          value={producto.precio}
          onChange={e => setProducto({ ...producto, precio: e.target.value })}
        />
        {errores.precio && <small className="text-danger">{errores.precio}</small>}
      </div>

      <div className="mb-3">
        <label>Costo de Compra</label>
        <input
          className="form-control"
          value={producto.costo}
          readOnly
        />
      </div>

      <div className="mb-3">
        <label>Cantidad Actual *</label>
        <input
          type="number"
          className="form-control"
          value={producto.cantidad}
          onChange={e => setProducto({ ...producto, cantidad: e.target.value })}
        />
        {errores.cantidad && <small className="text-danger">{errores.cantidad}</small>}
      </div>

      <div className="mb-3">
        <label>Stock Mínimo</label>
        <input
          type="number"
          className="form-control"
          value={producto.stockMinimo}
          onChange={e => setProducto({ ...producto, stockMinimo: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label>Estado</label>
        <select
          className="form-control"
          value={producto.estado}
          onChange={e => setProducto({ ...producto, estado: e.target.value })}
        >
          <option>Activo</option>
          <option>Inactivo</option>
        </select>
      </div>

      <button className="btn btn-success me-2" onClick={guardar}>
        Crear
      </button>
      <button className="btn btn-secondary" onClick={onCancelar}>
        Cancelar
      </button>
    </>
  );
}
