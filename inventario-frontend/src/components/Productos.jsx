import { useState } from "react"

export default function Productos({
  productos,
  setVista,
  setProductoEditar,
  setProductos
}) {
  const [busqueda, setBusqueda] = useState("")

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  const eliminarProducto = (id) => {
    if (window.confirm("¿Desea eliminar este producto?")) {
      setProductos(productos.filter(p => p.id !== id))
    }
  }

  return (
    <>
      <h2>Productos</h2>
      <p className="text-muted">Gestión de productos del inventario</p>

      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />

        <button className="btn btn-primary"
          onClick={() => setVista("nuevo")}>
          Nuevo Producto
        </button>
      </div>

      <div className="table-responsive">
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
            {productosFiltrados.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center">
                  No hay productos
                </td>
              </tr>
            )}

            {productosFiltrados.map(p => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>${p.precio}</td>
                <td>{p.cantidad}</td>
                <td>{p.estado}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      setProductoEditar(p)
                      setVista("editar")
                    }}>
                    Editar
                  </button>

                  <button className="btn btn-danger btn-sm"
                    onClick={() => eliminarProducto(p.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
