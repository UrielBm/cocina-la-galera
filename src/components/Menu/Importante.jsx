import React from "react"

const Importante = () => {
  return (
    <section className="wrapperImport">
      <h3 className="titleImport">Importante</h3>
      <div className="wrapperInfoImport">
        <div className="wrapperData">
          <p className="importName">Jarra de Agua extra</p>
          <p className="importPrecio">$ 15</p>
        </div>
        <div className="wrapperData">
          <p className="importName">Sopa Extra</p>
          <p className="importPrecio">$ 10</p>
        </div>
        <div className="wrapperData">
          <p className="importName">Papas a la francesa</p>
          <p className="importPrecio">$ 15</p>
        </div>
        <div className="wrapperData">
          <p className="importName">Desechable</p>
          <p className="importPrecio">$ 5</p>
        </div>
        <div className="wrapperInfoComida">
          <p>
            Comida corrida incluye 2 Sopas, 1 Guisado, 1 Jarra de agua y
            tortillas
          </p>
        </div>
      </div>
    </section>
  )
}

export default Importante
