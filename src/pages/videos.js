import React from 'react'
import Vimeo from '@u-wave/react-vimeo';
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'

const Vidoes = ({ data }) => {
  return (
    <Layout>
      <SEO title="Videos" />
      <Container>
        <Vimeo
          video="315953238"
          responsive
        />
        <Vimeo
          video="215743041"
          responsive
        />
      </Container>
    </Layout>
  )
}

export default Vidoes
