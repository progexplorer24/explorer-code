import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"

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

  pageContext: {
    previous?: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
    next?: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ data, pageContext }) => {
  const { frontmatter, body, fields, excerpt } = data.mdx
  const { title, date, cover } = frontmatter
  const { previous, next } = pageContext

  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {typeof previous === "undefined" ? null : (
        <>
          <Link to={previous.fields.slug}>
            <p>{previous.frontmatter.title}</p>
          </Link>
        </>
      )}
      {typeof next === "undefined" ? null : (
        <>
          <Link to={next.fields.slug}>
            <p>{next.frontmatter.title}</p>
          </Link>
        </>
      )}
    </>
  )
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
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
          childImageSharp {
            sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default BlogPost
