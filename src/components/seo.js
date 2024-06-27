import * as React from "react"

const Seo = ({
  title,
  description = "Karthik is a full-stack mobile engineer(iOS, Android, Windows and Backend) and a UX enthusiast.",
  lang = "en",
  meta = [],
}) => {
  return (
    <>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {meta.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </>
  )
}

export default Seo
