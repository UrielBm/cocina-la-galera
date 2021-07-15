import React from "react"
import useMenu from "../../hooks/useMenu"
const Platillos = () => {
  const { platillos } = useMenu()
  const { platillo } = platillos
  return (
    <section className="wrapperPlatillos">
      <h3 className="titlePlatillos">Platillos</h3>
      {platillo.map(({ nombre, precio, slug }, index) => (
        <div key={`${slug}-${index}`} className="platillo">
          <p className="platilloNombre">{nombre}</p>
          <p className="platilloPrecio">$ {precio}</p>
        </div>
      ))}
      <h3 className="titlePlatillos">Para preparar</h3>
      <div className="wrapperPreparar">
        <div className="platilloPreparar">
          <p className="platilloNombre">Pechuga</p>
          <div className="wrapperType">
            <p>Empanizada</p>
            <p>Asada</p>
          </div>
          <div className="wrapperTypeGuarni">
            <p>Chilaquiles</p>
            <p>Fruta</p>
            <p>Enchiladas</p>
          </div>
          <p className="precio">$ 70</p>
        </div>
        <div className="platilloPreparar">
          <p className="platilloNombre">Bistek</p>
          <div className="wrapperType">
            <p>Empanizado</p>
            <p>Asado</p>
          </div>
          <div className="wrapperTypeGuarni">
            <p>Chilaquiles</p>
            <p>Fruta</p>
            <p>Enchiladas</p>
          </div>
          <p className="precio">$ 70</p>
        </div>
        <div className="platilloPreparar">
          <p className="platilloNombre">Filete</p>
          <div className="wrapperType">
            <p>BBRQ</p>
            <p>Rebozado</p>
            <p>Mantequilla</p>
          </div>
          <div className="wrapperTypeGuarni">
            <p>Chilaquiles</p>
            <p>Fruta</p>
            <p>Enchiladas</p>
          </div>
          <p className="precio">$ 70</p>
        </div>
      </div>
    </section>
  )
}

export default Platillos
