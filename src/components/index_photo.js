
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "Profile.jpg" }) {
        id
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div>
      <Img
        fixed={data.file.childImageSharp.fixed}
      ></Img>
    </div>
  )
}
