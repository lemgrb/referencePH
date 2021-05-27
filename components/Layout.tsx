import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './Layout.module.scss'
import {GraphUp, ArrowsExpand, Twitter, Facebook, Book} from 'react-bootstrap-icons'
import {Navbar, Nav} from 'react-bootstrap-v5'

type Props = {
  children?: ReactNode
  title?: string
  home?: boolean
  metaDescription?: string
}

const Layout = ({ children, title = 'ReferencePH', home = false, metaDescription = ''}: Props) => (
  <>
  <div className="container">
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
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
          <span>&nbsp;ReferencePH 🇵🇭</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <ArrowsExpand />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
            <Link href="/open-data" passHref><Nav.Link><GraphUp className="d-md-none me-2"/>Open Data Sets</Nav.Link></Link>
            <Link href="/ebooks" passHref><Nav.Link><Book className="d-md-none me-2"/>&nbsp;eBooks</Nav.Link></Link>
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
          <h2>Follow us</h2>
        </div>
        <ul>
          <li><a href="https://www.facebook.com/Reference-PH-109850137936783" target="_blank" rel="noopener noreferrer"><Facebook color="#4267B2" size={32} />&nbsp;Facebook</a></li>
          <li><a href="https://twitter.com/referencePH" target="_blank" rel="noopener noreferrer"><Twitter color="#1DA1F2" size={32} />&nbsp;Twitter</a></li>
        </ul>
      </div>
      <div className="col-md-8">
        <h2>Hey!</h2>
        <p>If you have a feature request or found an issue, please contact us on our Twitter and Facebook pages.</p>
        <p>If you find value in this site, might wanna <a href="https://www.buymeacoffee.com/lemuelb">Buy me a coffee</a>? 😁</p>
        <span>&copy; 2021 ReferencePH Version 0.0.6</span>
      </div>
    </footer>
  </div>
  </>
)

export default Layout
