import React from "react"
import Logo from "../images/logo.gif"
import Baffle from "baffle-react"

const Main = () => {
  return (
    <section id="main">
      <div className="intro">
        <h1>Hello World</h1>
        <h2>
          <Baffle
            speed={40}
            revealDuration={1000}
            revealDelay={0}
            obfuscate={false}
          >
            My name is Nemanja Jakonić
          </Baffle>
        </h2>
        <h3>
          <Baffle
            speed={50}
            revealDuration={1000}
            revealDelay={500}
            obfuscate={false}
          >
            I'm a self-taught frontend developer, striving to become fullstack
            developer.
          </Baffle>
        </h3>
      </div>
      <div className="logo">
        <img
          src={Logo}
          alt="logo"
          title="Shoutout to my wife who made this photo ;)"
        />
      </div>
    </section>
  )
}

export default Main
