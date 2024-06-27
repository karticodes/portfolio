import React from "react"
import { container, layout } from "../styles/container.module.css"
import Header from "./header.js"

const Container = ({ children }) => (
  <div className={container}>
    <div className={layout}>
      <Header />
      <div>{children}</div>
    </div>
  </div>
)

export default Container
