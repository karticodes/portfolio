import React from "react"
import Container from "../components/container.js"
import IndexPhoto from "../components/index_photo.js"
import {
  title_and_image_container,
  intro_container,
  title,
} from "../styles/index.module.css"
import Seo from "../components/seo.js"

const Index = () => (
  <Container>
    <div className={title_and_image_container}>
      <IndexPhoto />
      <div className={intro_container}>
        <h1 className={title}>
          Hey,
          <br />
          I'm Karthik
        </h1>
        <div>
          Managing a full-stack engineering team,
          <br />
          at Gojek
        </div>
      </div>
    </div>
  </Container>
)

export function Head() {
  return <Seo title="Karthik M R | Home"/>;
}

export default Index;
