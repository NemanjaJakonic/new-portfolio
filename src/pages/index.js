import React from "react"
import "../components/styles.css"
import ParticlesCanvas from "../components/particles"
import Main from "../components/main"
import Navbar from "../components/navbar"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

export const Head = () => (
  <>
    <meta charSet="utf-8" />
    <title>Nemanja Jakonić</title>
    <meta
      name="description"
      content="Nemanja Jakonić, self-taught frontend developer from Novi Sad, Serbia"
    />
    <script
      src="https://kit.fontawesome.com/7997da006a.js"
      crossOrigin="anonymous"
    ></script>
  </>
)

export default () => (
  <div id="wrapper">
    <ParticlesCanvas />
    <Main />
    <Navbar />
    <Projects />
    <About />

    <Contact />
  </div>
)
