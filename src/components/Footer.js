import React from 'react'
import styled from '@emotion/styled'
import instagramLogo from '../../static/images/instagram-logo.png'

const Footer = styled.div`
  width: 100%;
  color: DarkGray;
  text-align: center;
  background: #fff;
  padding: 1em 0;
`

const Content = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  line-height: 1.25;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  img {
    height: 25px;
    width: auto;
  }
  a {
    color: DarkGray;
    font-weight: bold;
    text-decoration: none;
  }
`

const Menu = () => {
  return (
    <Footer>
      <Content>
        <p>
          Bewabon Shilling
        </p>
        <a
            href="https://instagram.com/bewabonshilling"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={instagramLogo} alt="Instagram logo" />
        </a>
      </Content>
    </Footer>
  )
}

export default Menu
