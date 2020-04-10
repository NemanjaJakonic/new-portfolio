import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  return (
    <section id="navigation">
      <nav>
        <button className="btn" onClick={() => scrollTo("#projects")}>
          Projects
        </button>

        <button className="btn" onClick={() => scrollTo("#about")}>
          About
        </button>
        <button className="btn" onClick={() => scrollTo("#contact")}>
          Contact
        </button>
      </nav>
    </section>
  )
}

export default Navbar
