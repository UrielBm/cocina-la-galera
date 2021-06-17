import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { StaticImage } from "gatsby-plugin-image"
import Title from "./../General/Title"
import "./Hero.scss"
const Hero = () => {
  const { backgroundImg } = useStaticQuery(graphql`
    query {
      backgroundImg: file(relativePath: { eq: "background/background.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 950
            quality: 60
            webpOptions: { quality: 70 }
            formats: WEBP
            placeholder: BLURRED
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
    }
  `)
  const image = getImage(backgroundImg)
  return (
    <section>
      <BgImage image={image} className="wrapperhero">
        <div className="hero">
          <div>
            <StaticImage
              src="./../../images/logo.png"
              placeholder="blurred"
              alt="logo"
              className="wrapperLogo"
              imgClassName="logo"
            />
          </div>
          <div className="wrapperTitle">
            <Title title="La Galera" />
          </div>
          <div className="wrapperNav">
            <Link to={"/comida"} className="NavItem">
              Comida
            </Link>
            <Link to={"/desayunos"} className="NavItem">
              Desayunos
            </Link>
          </div>
        </div>
      </BgImage>
    </section>
  )
}

export default Hero
