import React from "react"
import Header from "./header.js"
import Helmet from "react-helmet"
import { layout } from "../styles/container.module.css"

const Layout = ({ children, pageTitle }) => (
  <div className={layout}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      <meta name="title" content="Karthik | A full-stack mobile developer" />
      <meta
        name="description"
        content="Karthik is a full-stack mobile engineer(iOS, Android, Windows and Backend) and a UX enthusiast."
      ></meta>
      <html lang="en" />
    </Helmet>
    <Header />
    <div>{children}</div>
  </div>
)

export default Layout;