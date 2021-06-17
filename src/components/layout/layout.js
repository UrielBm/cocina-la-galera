/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import "./reset.css"
import "./layout.scss"
import Footer from "../Footer/Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <meta
          name="description"
          content="pagina web del menu de cocina la galera , restaurante en Pachuca Hidalgo."
        />
        <title>Cocina la Galera</title>
      </Helmet>
      <main className="wrapperMain">{children}</main>
      <div className="wrapperFooter">
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
