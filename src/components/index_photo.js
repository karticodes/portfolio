import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IndexPhoto = () => {
  return (
    <div>
      <StaticImage src={"../images/profile.jpg"} alt="Profile Image" layout="constrained" aspectRatio={1} width={300} />
    </div>
  )
}

export default IndexPhoto