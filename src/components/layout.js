import * as React from 'react'
import { Link } from 'gatsby'
import {
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css' 

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
        <Link to="/">gautham acharya</Link>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/portfolio" className={navLinkText}>portfolio</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
