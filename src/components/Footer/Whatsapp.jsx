import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Whatsapp = ({ mensaje }) => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allDatoCmsWhatsapp {
        whats: nodes {
          numero
        }
      }
    }
  `)
  const { numero } = data.whats[0]
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=52${numero}&text=${mensaje}`}
      target="_black"
      rel="noreferrer"
      className="Whatsapp"
    >
      <StaticImage
        src="./../../images/icons/whatsapp.svg"
        placeholder="blurred"
        alt="logo"
        className="wrapperIcon"
        imgClassName="whats"
      />
      <span className="text">WhatsApp</span>
    </a>
  )
}

export default Whatsapp
