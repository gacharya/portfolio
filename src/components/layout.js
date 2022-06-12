import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css' 
import starUrl, { ReactComponent as Star } from '/Users/gauthamacharya/Downloads/logo_gray.svg'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
    <div class="topnav">
      <title>gautama</title>
      <Star class="logo" onClick={() => { window.location.href="/"}}/>
    <a href="/about">about</a>
    <a href="/red">portfolio</a>
  </div>

  <main>
    {children}
  </main>
    </div>
    )
}

export default Layout
