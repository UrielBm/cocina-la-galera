import React from "react"
import useMenu from "../../hooks/useMenu"
const PrimerTiempo = () => {
  const { primer_tiempo } = useMenu()
  const { sopa1, sopa2 } = primer_tiempo.sopasSeca[0]
  return (
    <section className="wrapperSopas">
      <p>{sopa1}</p>
      <p>{sopa2}</p>
    </section>
  )
}

export default PrimerTiempo
