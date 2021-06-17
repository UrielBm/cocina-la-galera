import { useStaticQuery, graphql } from "gatsby"

const useMenu = () => {
  const {
    primer_tiempo,
    segundo_tiempo,
    platillos,
    postres,
  } = useStaticQuery(graphql`
    query {
      primer_tiempo: allDatoCmsPrimerTiempo {
        sopasSeca: nodes {
          sopa1
          sopa2
        }
      }
      segundo_tiempo: allDatoCmsSegundoTiempo {
        sopas: nodes {
          arroz
          spaghetti
        }
      }
      platillos: allDatoCmsPlatillo {
        platillo: nodes {
          nombre
          precio
          slug
          internal {
            contentDigest
          }
        }
      }
      postres: allDatoCmsPostre {
        postre: nodes {
          nombre
          costo
          slug
        }
      }
    }
  `)

  return {
    primer_tiempo,
    segundo_tiempo,
    platillos,
    postres,
  }
}

export default useMenu
