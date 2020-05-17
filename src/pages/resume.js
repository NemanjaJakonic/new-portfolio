import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const DownloadsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <div
      style={{ backgroundColor: "#1a1a1a", height: "100vh", width: "100vw" }}
    >
      <h1
        style={{
          margin: "0",
          padding: "2rem",
        }}
      >
        Download
      </h1>
      <ul>
        {data.allFile.edges.map((file, index) => {
          return (
            <li key={`pdf-${index}`}>
              <a
                style={{ color: "var(--primary-color)" }}
                href={file.node.publicURL}
                download
              >
                {file.node.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default DownloadsPage
