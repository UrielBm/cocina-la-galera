import React from "react"
import useMenu from "../../hooks/useMenu"
const Postres = () => {
  const { postres } = useMenu()
  const { postre } = postres
  return (
    <section className="wrapperPlatillos">
      <h3 className="titlePlatillos">Postres</h3>
      {postre.map(({ nombre, costo, slug }, index) => (
        <div key={`${slug}-${index}`} className="platillo">
          <p className="platilloNombre">{nombre}</p>
          <p className="platilloPrecio">$ {costo}</p>
        </div>
      ))}
    </section>
  )
}

export default Postres
