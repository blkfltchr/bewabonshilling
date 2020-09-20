import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { push as MobileMenu } from 'react-burger-menu'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { globalStyles } from '../styles/globalStyles.js'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};
`

const Skip = styled.a`
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`

const activeLinkStyle = {
  fontWeight: 700,
  textDecoration: 'underline'
}

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  bmItem: {
    display: 'inline-block',
    color: 'white',
    textDecoration: 'none'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Layout = props => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])
  const { menuLinks } = useSiteMetadata()

  return (
    <Root className="siteRoot">
      <MobileMenu right styles={styles}>
        {menuLinks.map(link => (
          <Link to={link.slug} activeStyle={activeLinkStyle} key={link.name}>
            {link.name}
          </Link>
        ))}
      </MobileMenu>
      <div className="siteContent">
        <Skip href="#main" id="skip-navigation">
          Skip to content
        </Skip>
        <Menu />
        <div id="main">{props.children}</div>
        <Footer />
      </div>
      <Global styles={globalStyles} />
    </Root>
  )
}

export default Layout
