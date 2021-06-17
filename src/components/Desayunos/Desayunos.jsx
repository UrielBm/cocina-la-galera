import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const Desayunos = ({ desayuno }) => {
  const { nombre, precio, descripcion, fotografia } = desayuno
  const image = getImage(fotografia)
  return (
    <article className="wrapperDesayuno">
      <div className="wrapperImgDesayuno">
        <GatsbyImage
          image={image}
          alt="fotografia desayuno"
          className="wrapperImgDesayuno"
          imgClassName="desayunoImg"
        />
      </div>
      <div className="wrapperInfoDesayuno">
        <div className="wrapperFundaData">
          <p className="nameDesayuno">Nombre: {nombre}</p>
          <p className="precioDesayuno"> ${precio}</p>
        </div>
        <div className="wrapperDescriptionDesayuno">
          <p>{descripcion}</p>
        </div>
      </div>
    </article>
  )
}

export default Desayunos
