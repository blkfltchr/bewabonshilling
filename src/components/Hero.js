import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
`
const BgImg = styled(Img)`
  height: auto;
  width: 90%;
  max-width: 650px;
  max-height: 75vh;
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const Hero = props => (
  <Wrapper>
    <BgImg fluid={props.image.fluid} backgroundColor={'#eeeeee'} />
  </Wrapper>
)

export default Hero
