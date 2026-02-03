export default function Navbar({ cambiarVista }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">Inventario</span>

        <button className="btn btn-outline-light"
          onClick={() => cambiarVista("productos")}>
          Productos
        </button>
      </div>
    </nav>
  )
}
