import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  console.log('data', data)
  const title = data.allContentfulHomePage.edges[0].node.hero.title
  const description = data.allContentfulHomePage.edges[0].node.hero.description.description

  return (
    <>
      <h1>{ title }</h1>
      <p>{ description }</p>
    </>
  )
}

export const pageQuery = graphql`
  query IndexPage {
    allContentfulHomePage {
      edges {
        node {
          services {
            service {
              subservice {
                title
                description {
                  description
                }
              }
            }
          }
          hero {
            title
            description {
              description
            }
          }
          faq {
            faq {
              answer {
                answer
              }
              question
            }
            title
          }
          blogPosts {
            button
            title
            blogPost {
              body {
                body
              }
            }
          }
        }
      }
    }
  }
`
