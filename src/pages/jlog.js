import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '/src/components/layout'
import Seo from '/src/components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>A day in the life of a kidnapper, murder and all round criminal.</p>
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage