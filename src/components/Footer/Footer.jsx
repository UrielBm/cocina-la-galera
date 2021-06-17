import React from "react"
import "./footer.scss"
import Whatsapp from "./Whatsapp"
const Footer = () => {
  const getYear = () => {
    const Year = new Date()
    return Year.getFullYear()
  }
  return (
    <footer className="footer">
      <section className="wrapperCopy">
        <p className="copy">CopyRight {getYear()} &copy; </p>
      </section>
      <section>
        <Whatsapp mensaje="hola, me gustaria contactarme con la cocina la galera para: " />
      </section>
    </footer>
  )
}

export default Footer
