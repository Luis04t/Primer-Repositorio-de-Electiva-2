import { useState } from "react"

export default function FormProducto({
  productos,
  setProductos,
  setVista,
  productoEditar
}) {
  const [form, setForm] = useState(
    productoEditar || {
      nombre: "",
      descripcion: "",
      precio: "",
      costo: 0,
      cantidad: "",
      stockMinimo: "",
      estado: "Activo"
    }
  )

  const [errores, setErrores] = useState({})

  const validar = () => {
    let errs = {}
    if (!form.nombre) errs.nombre = "Nombre obligatorio"
    if (!form.precio) errs.precio = "Precio obligatorio"
    if (!form.cantidad) errs.cantidad = "Cantidad obligatoria"
    return errs
  }

  const guardar = () => {
    const errs = validar()
    if (Object.keys(errs).length > 0) {
      setErrores(errs)
      return
    }

    if (productoEditar) {
      setProductos(productos.map(p =>
        p.id === productoEditar.id ? { ...form, id: p.id } : p
      ))
    } else {
      setProductos([
        ...productos,
        { ...form, id: Date.now() }
      ])
    }

    setVista("productos")
  }

  return (
    <>
      <h2>{productoEditar ? "Editar Producto" : "Nuevo Producto"}</h2>

      <div className="card p-4 w-100">
        <div className="mb-3">
          <label>Nombre *</label>
          <input className="form-control"
            value={form.nombre}
            onChange={e => setForm({ ...form, nombre: e.target.value })} />
          {errores.nombre && <small className="text-danger">{errores.nombre}</small>}
        </div>

        <div className="mb-3">
          <label>Descripción</label>
          <textarea className="form-control"
            value={form.descripcion}
            onChange={e => setForm({ ...form, descripcion: e.target.value })} />
        </div>

        <div className="mb-3">
          <label>Precio de Venta *</label>
          <input type="number" className="form-control"
            value={form.precio}
            onChange={e => setForm({ ...form, precio: e.target.value })} />
          {errores.precio && <small className="text-danger">{errores.precio}</small>}
        </div>

        <div className="mb-3">
          <label>Costo de Compra</label>
          <input className="form-control" value={form.costo} disabled />
        </div>

        <div className="mb-3">
          <label>Cantidad Actual *</label>
          <input type="number" className="form-control"
            value={form.cantidad}
            onChange={e => setForm({ ...form, cantidad: e.target.value })} />
          {errores.cantidad && <small className="text-danger">{errores.cantidad}</small>}
        </div>

        <div className="mb-3">
          <label>Stock Mínimo</label>
          <input type="number" className="form-control"
            value={form.stockMinimo}
            onChange={e => setForm({ ...form, stockMinimo: e.target.value })} />
        </div>

        <div className="mb-3">
          <label>Estado</label>
          <select className="form-select"
            value={form.estado}
            onChange={e => setForm({ ...form, estado: e.target.value })}>
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-success" onClick={guardar}>
            Crear
          </button>
          <button className="btn btn-secondary"
            onClick={() => setVista("productos")}>
            Cancelar
          </button>
        </div>
      </div>
    </>
  )
}
