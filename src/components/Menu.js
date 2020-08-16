import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import logo from '../../static/images/logo.png'

const Header = styled.header`
  background: ${props => props.theme.colors.background};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
    img {
      max-width: 180px;
    }
    @media only screen and (max-width: 400px) {
      &:nth-of-type(2) {
        display: none;
      }
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    &:not(first-of-type)&:hover {
      border-bottom: 2px solid ${props => props.theme.colors.primary};
      color: black;
    }
    @media only screen and (max-width: 540px) {
      font-size: 14px;
    }
    @media only screen and (max-width: 450px) {
      font-size: 10px;
    }
  }
`

const activeLinkStyle = {
  color: 'black',
  borderBottom: '2px solid black',
}

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logo} />
            </Link>
          </li>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.slug} activeStyle={activeLinkStyle}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
