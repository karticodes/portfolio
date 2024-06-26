import React, { Component } from "react"
import { Link } from "gatsby"
import { header, header_link, social_item, social_item_container, social_items_container } from "../styles/header.module.css"
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa"

const socialLinks = [
  {
    icon: FaInstagram,
    placeholder: "Instagram",
    url: "https://www.instagram.com/karthikmrt",
  },
  {
    icon: FaTwitter,
    placeholder: "Twitter",
    url: "https://www.twitter.com/karthik_mrt",
  },
  {
    icon: FaLinkedinIn,
    placeholder: "Linkedin",
    url: "https://www.linkedin.com/in/karthikmrt",
  },
  {
    icon: FaGithub,
    placeholder: "Github",
    url: "https://github.com/karticodes",
  },
]

const linkStyle = {
  textDecoration: `none`,
}

const HeaderLink = props => (
  <Link className={header_link} style={linkStyle} to={props.to}>
    {props.children}
  </Link>
)

const SocialLink = props => {
  const Icon = props.icon
  return (
    <a
      className={social_item_container}
      style={props.style}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div title={props.placeholder}>
        <Icon size="20px" className={social_item} />
      </div>
    </a>
  )
}

const SocialLinks = props => (
  <div className={social_items_container}>
    {socialLinks.map(socialLink => (
          <SocialLink
            icon={socialLink.icon}
            url={socialLink.url}
            placeholder={socialLink.placeholder}
          />
        ))}
  </div>
)

export default class Header extends Component {
  render() {
    return (
      <div className={header}>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/reads">My Reads</HeaderLink>
        <SocialLinks/>
      </div>
    )
  }
}
