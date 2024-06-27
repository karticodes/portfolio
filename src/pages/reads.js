import React from "react"
import Container from "../components/container.js"
import GoodreadsBookshelf from "react-goodreads-shelf"
import Seo from "../components/seo.js"
import "../styles/reads.css"

const Reads = () => {
  const descriptionText =
    "After a long and packed workday, reading a book for at least half an hour helps me start the next day fresh and as a better person. Cheat days are the ones when I stay up the whole night to finish a book.";
  
  const GOODREADS_USER_ID = "31126078"

  return (
    <Container>
      <div class="description">{descriptionText}</div>
      <div class="shelf_title_text">Currently Reading</div>

      <GoodreadsBookshelf
        displayOptions={{
          hideBackgroundImages: false,
          hideDetails: {
            author: true,
            rating: true,
            subtitle: true,
            title: true,
          },
        }}
        hideDetails={["title", "subtitle", "author", "rating"]}
        limit={2}
        order="d"
        search=""
        shelf="currently-reading"
        sort="date_updated"
        userId={GOODREADS_USER_ID}
        width={100}
      />

      <div class="shelf_title_text">Recently Read</div>

      <GoodreadsBookshelf
        displayOptions={{
          hideBackgroundImages: false,
          hideDetails: {
            author: true,
            rating: true,
            subtitle: true,
            title: true,
          },
        }}
        hideDetails={["title", "subtitle", "author", "rating"]}
        limit={18}
        order="d"
        search=""
        shelf="read"
        sort="date_updated"
        userId={GOODREADS_USER_ID}
        width={100}
      />

      <a
        href="https://goodreads.com/karthikmrt"
        target="_blank"
        rel="noopener noreferrer"
      >
        More on goodreads
      </a>
      <br />
    </Container>
  )
}

export function Head() {
  return <Seo title="Karthik M R | My Reads" />
}

export default Reads
