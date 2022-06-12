// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import PortfolioNav from '../components/portfolio_nav'
import { StaticImage } from "gatsby-plugin-image"
import figure from "../images/figure.jpg"

const PortfolioMisc = () => {
  return (
    <Layout pageTitle='portfolio'>
      <PortfolioNav />
    <div className="row">
        <div className="col">
          <img src={figure}/> 
        </div>
        <div className="col">
          <img src={figure}/> 
        </div>
        <div className="col">
          <img src={figure}/> 
        </div>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default PortfolioMisc 
