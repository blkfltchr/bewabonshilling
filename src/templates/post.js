import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import PostLinks from '../components/PostLinks'
import SEO from '../components/SEO'

const PostContainer = styled.div`
  margin: 0 auto;
  width: 400px;
  max-width: 95%;
  h2 {
    font-weight: 600;
    font-size: 1.5em;
    margin-bottom: 1em;
  }
`

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    heroImage,
    body,
  } = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next
  const { basePath } = pageContext

  let ogImage
  try {
    ogImage = heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }
  return (
    <Layout>
      <SEO
        title={title}
        image={ogImage}
        description={`${title} by Bewabon Shilling. ${body.childMarkdownRemark.excerpt}.`}
      />
      <PostContainer>
        <Hero title={title} image={heroImage} />
        <Container>
          <h2>{title}</h2>
          <PageBody body={body} post />
        </Container>
        <PostLinks previous={previous} next={next} basePath={basePath} />
      </PostContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
        }
      }
      body {
        childMarkdownRemark {
          timeToRead
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate
