import React from "react"
import Container from "../components/container.js"
import Layout from "../components/layout.js"
import IndexPhoto from "../components/index_photo.js"
import IndexStyles from "../styles/index.module.css"

export default () => (
  <Container>
    <Layout pageTitle="Karthik M R">
      <div className={IndexStyles.title_and_image_container}>
        <IndexPhoto className={IndexStyles.photo} />
        <div>
          <h1>
            Hey,
            <br />
            I'm Karthik
          </h1>
          <div>
            A full-stack mobile engineer,<br />a UX enthusiast
          </div>
        </div>
      </div>
    </Layout>
  </Container>
)
