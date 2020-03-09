import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

type BlogPostProps = {
  data: {
    mdx: {
      body: string
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
        date: string
        cover: {
          publicURL: string
        }
      }
    }
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const { body } = data.mdx
  console.log(data.mdx)

  return <MDXRenderer>{body}</MDXRenderer>
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
export default BlogPost
