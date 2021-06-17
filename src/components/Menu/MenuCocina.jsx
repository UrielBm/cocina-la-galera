import React from "react"
import Subtitle from "./../General/Subtitle"
import PrimerTiempo from "./PrimerTiempo"
import SegundoTiempo from "./SegundoTiempo"
import Platillos from "./Platillos"
import Postres from "./Postres"
import "./menu.scss"
const MenuCocina = () => {
  return (
    <>
      <div className="wrapperSubTitle">
        <Subtitle subtitle="Menú comida" />
        <div className="wrapperMenu">
          <PrimerTiempo />
          <SegundoTiempo />
          <Platillos />
          <Postres />
        </div>
      </div>
    </>
  )
}

export default MenuCocina
