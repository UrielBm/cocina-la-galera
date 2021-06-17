import React from "react"
import Subtitle from "../General/Subtitle"
import Desayunos from "./Desayunos"
import { useStaticQuery, graphql } from "gatsby"
import "./desayunos.scss"
const WrapperDesayunos = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allDatoCmsDesayuno {
        desayunos: nodes {
          nombre
          precio
          descripcion
          slug
          fotografia {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
      }
    }
  `)
  const { desayunos } = data
  return (
    <>
      <div className="wrapperSubtitleDesayunos">
        <Subtitle subtitle="Menú Desayunos" />
        <div className="wrapperDesayunos">
          {desayunos.map((desayuno, index) => (
            <Desayunos key={`${desayuno.slug}-${index}`} desayuno={desayuno} />
          ))}
        </div>
      </div>
    </>
  )
}

export default WrapperDesayunos
