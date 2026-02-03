import { useState } from "react"
import Navbar from "./components/Navbar"
import Productos from "./components/Productos"
import FormProducto from "./components/FormProducto"

function App() {
  const [vista, setVista] = useState("productos")
  const [productos, setProductos] = useState([])
  const [productoEditar, setProductoEditar] = useState(null)

  return (
    <>
      <Navbar cambiarVista={setVista} />

      <div className="container mt-4">
        {vista === "productos" && (
          <Productos
            productos={productos}
            setVista={setVista}
            setProductoEditar={setProductoEditar}
            setProductos={setProductos}
          />
        )}

        {vista === "nuevo" && (
          <FormProducto
            productos={productos}
            setProductos={setProductos}
            setVista={setVista}
          />
        )}

        {vista === "editar" && (
          <FormProducto
            productos={productos}
            setProductos={setProductos}
            setVista={setVista}
            productoEditar={productoEditar}
          />
        )}
      </div>
    </>
  )
}

export default App
