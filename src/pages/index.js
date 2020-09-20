import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Banner from '../components/Banner'
import SEO from '../components/SEO'

const Announcement = styled.div`
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 0.5em 0;
  }

  .date {
    font-style: italic;
  }
`

const Index = data => {
  const { date, heading, location, subheading, text: { text } } = data.data.allContentfulAnnouncement.edges[0].node;
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Banner bannerData={data.data.allContentfulHeaderBanner.edges} />
        <Announcement>
          <h1>{heading}</h1>
          <h2>{subheading}</h2>
          <h3>{location}</h3>
          <p className="date">{date}</p>
          <p>{text}</p>
        </Announcement>
      </Container>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query HomeQuery {
    allContentfulHeaderBanner {
      edges {
        node {
          image {
            fluid(maxWidth: 1800) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    allContentfulAnnouncement(limit: 1) {
    edges {
      node {
        date
        heading
        location
        subheading
        text {
          text
        }
      }
    }
  }
  }
`
