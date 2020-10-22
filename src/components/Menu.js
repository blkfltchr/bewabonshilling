import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
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
    :nth-of-type(3) {
    padding: 20px 0;
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f1f1f1;
      min-width: 120px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      z-index: 1000;
      text-align: left;
      margin: 10px 0 0 0;
      a {
        margin: 10px;
        color: black;
        font-weight: normal;
      }
    }
  }
  :nth-of-type(3):hover .dropdown-content {
    display: flex;
    flex-direction: column;
  }
    @media only screen and (max-width: 500px) {
      &:not(:first-of-type) {
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
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logo} />
            </Link>
          </li>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/paintings" activeStyle={activeLinkStyle}>
              Paintings
            </Link>
            <div className="dropdown-content">
              <Link to="/recent-works">Recent Works</Link>
              <Link to="/field-series-and-landscapes">Field Series and Landscapes</Link>
              <Link to="/tree-series">Tree Series</Link>
              <Link to="/older-works">Older Works</Link>
            </div>
          </li>
          <li>
            <Link to="/videos" activeStyle={activeLinkStyle}>
              Videos
            </Link>
          </li>
          <li>
            <Link to="/bio" activeStyle={activeLinkStyle}>
              Bio
            </Link>
          </li>
          <li>
            <Link to="/cv" activeStyle={activeLinkStyle}>
              CV
            </Link>
          </li>
          <li>
            <Link to="/contact" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
