import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './Layout.module.scss'
import {ArrowsExpand, EmojiSmile, Twitter, Facebook} from 'react-bootstrap-icons'
import {Navbar, Nav} from 'react-bootstrap-v5'

type Props = {
  children?: ReactNode
  title?: string
  home?: boolean
}

const Layout = ({ children, title = 'ReferencePH', home = false}: Props) => (
  <>
  <div className="container">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" type="image/jpg" href="favicon.jpg" />
    </Head>
    <header className={`row ${styles.header}`}>
      <Navbar bg="red" expand="lg">
        <Navbar.Brand href={home?'#':'/'} style={{display: 'flex', alignItems: 'center' }}>
          <img src="/logo.jpg"
          alt="referencePH site logo showing an open book with the text 'referencePH' on top"
          width='42px'
          height='42px'
          />
          <span>&nbsp;ReferencePH</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <ArrowsExpand />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
            <Link href="#" passHref><Nav.Link>Open Data Sets</Nav.Link></Link>
            <Link href="/ebooks" passHref><Nav.Link>eBooks</Nav.Link></Link>
            <Link href="/guides" passHref><Nav.Link>Guides</Nav.Link></Link>
            <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
    {children}
  </div>
  <div className="container-fluid">
    <footer className={`row ${styles.footer}`}>
      <div className="col-md-4">
        <div className={styles.footer_logo}>
          <h5>Follow us</h5>
        </div>
        <ul>
          <li><a href="https://www.facebook.com/Reference-PH-109850137936783" target="_blank"><Facebook color="#4267B2" size={32} />&nbsp;Facebook</a></li>
          <li><a href="https://twitter.com/referencePH" target="_blank"><Twitter color="#1DA1F2" size={32} />&nbsp;Twitter</a></li>
        </ul>
      </div>
      <div className="col-md-8">
        <h5>Hey!</h5>
        <p>If you have a feature request or found an issue, please <a href="https://github.com/lemgrb/referencePH/issues/new/choose" target="_blank">submit an issue</a></p>
        <p>If you like this site maybe you can <a href="https://www.buymeacoffee.com/lemuelb">Buy me a coffee</a>? <EmojiSmile /></p>
        <span>&copy; 2021 ReferencePH Version 0.0.3</span>
      </div>
    </footer>
  </div>
  </>
)

export default Layout
