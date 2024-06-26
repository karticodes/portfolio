import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "Profile.jpg" }) {
        id
        childImageSharp {
          fixed(width: 230, height: 230) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktopImage: file(relativePath: { eq: "Profile.jpg" }) {
        id
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const sources = [
    {
      ...data.mobileImage.childImageSharp.fixed,
      media: `(max-width: 600px)`,
    },
    {
      ...data.desktopImage.childImageSharp.fixed,
      media: `(min-width: 600px)`,
    }
  ]

  return (
    <div>
      <Img fixed={sources}></Img>
    </div>
  )
}

export default IndexPhoto;