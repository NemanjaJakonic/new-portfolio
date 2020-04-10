import React from "react"
import ParticlesCanvas from "../components/particles"
import "../components/styles.css"
import Main from "../components/main"
import Navbar from "../components/navbar"
import Projects from "../components/projects"
import About from "../components/about"
import { Helmet } from "react-helmet"
import Contact from "../components/contact"

export default () => (
  <div id="wrapper">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Nemanja Jakonić</title>
      <meta
        name="description"
        content="Nemanja Jakonić, self-taught frontend developer from Novi Sad, Serbia"
      />
      <script
        src="https://kit.fontawesome.com/7997da006a.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
    <ParticlesCanvas />
    <Main />
    <Navbar />
    <Projects />
    <About />

    <Contact />
  </div>
)
