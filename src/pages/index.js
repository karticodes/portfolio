import React from "react"
import Container from "../components/container.js"
import Layout from "../components/layout.js"
import IndexPhoto from "../components/index_photo.js"
import IndexStyles from "../styles/index.module.css"

export default () => (
  <Container>
    <Layout pageTitle="Karthik M R">
      <div className={IndexStyles.title_and_image_container}>
        <IndexPhoto/>
        <div className={IndexStyles.intro_container}>
          <h1 className={IndexStyles.title}>
            Hey,
            <br />
            I'm Karthik
          </h1>
          <div>
            Managing a full-stack engineering team,<br />at Gojek
          </div>
        </div>
      </div>
    </Layout>
  </Container>
)
