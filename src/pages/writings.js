import React, { useState, useEffect } from "react"
import Container from "../components/container.js"
import Seo from "../components/seo.js"
import "../styles/writings.css"
import "../styles/common.css"

const Writings = () => {
  const descriptionText =
    "Writing my experiences as a poem, blog post, or short story helps me relive them through a creative lens. My ultimate aim is to publish those 10+ drafts and pen those 1000+ thoughts."

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40karthikmrt"
    )
      .then(response => response.json())
      .then(data => setArticles(data.items))
  }, [])

  return (
    <Container>
      <div class="page_generic_description">{descriptionText}</div>

      {articles.map((article, index) => (
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          class="blog_link"
        >
          <div key={index} class="blog_container">
            <div class="page_section_header">{article.title}</div>
            <p class="blog_subtitle">&#35; {article.categories.join(", ")}</p>
          </div>
        </a>
      ))}

      <a
        href="https://mittaai.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        class="blog_link"
      >
        <div class="blog_container">
          <div class="page_section_header">மிட்டாய் கவிதைகள்!</div>
          <p class="blog_subtitle">
            If you could read the above line, click to read my Tamil poems.
          </p>
        </div>
      </a>
    </Container>
  )
}

export function Head() {
  return <Seo title="Karthik M R | Writings" />
}

export default Writings
