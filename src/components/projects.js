import React, { Fragment, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Baffle from "baffle-react"

const Projects = () => {
  const [id, SetId] = useState("")

  const data = useStaticQuery(graphql`
    {
      allContentfulProjects {
        nodes {
          id
          code
          demo
          live
          title
          description {
            description
          }
          technologies {
            technologies
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  const {
    allContentfulProjects: { nodes: projects },
  } = data

  return (
    <Fragment>
      <section id="projects">
        <h2>Projects:</h2>
        <div className="project-container">
          {projects.map(project => {
            return (
              <div className="projects" key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.technologies.technologies}</p>
                <div
                  className="project"
                  role="presentation"
                  onMouseEnter={() => [SetId(project.id)]}
                >
                  <div className="overlay"></div>
                  <Image
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "5px",
                    }}
                    fluid={project.image.fluid}
                  />

                  <a
                    style={
                      project.live === null
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    href={project.demo}
                    target="_blank"
                    className="btn btn-project"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    style={
                      project.live === null
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    href={project.code}
                    target="_blank"
                    className="btn btn-project"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                  <a
                    style={
                      project.live !== null
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    href={project.live}
                    target="_blank"
                    className="btn btn-project"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <p
                    style={id === project.id ? { opacity: 1 } : { opacity: 0 }}
                  >
                    <Baffle
                      speed={50}
                      update={id === project.id ? true : false}
                      obfuscate={id === project.id ? false : true}
                      revealDuration={500}
                    >
                      {project.description.description}
                    </Baffle>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </Fragment>
  )
}

export default Projects
