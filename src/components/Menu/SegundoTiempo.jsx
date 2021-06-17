import React from "react"
import useMenu from "../../hooks/useMenu"
const SegundoTiempo = () => {
  const { segundo_tiempo } = useMenu()
  const { arroz, spaghetti } = segundo_tiempo.sopas[0]
  return (
    <section className="wrapperSopas">
      <p>{arroz}</p>
      <p>{spaghetti}</p>
    </section>
  )
}

export default SegundoTiempo
