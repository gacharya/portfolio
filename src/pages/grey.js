// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import PortfolioNav from '../components/portfolio_nav'
import { StaticImage } from "gatsby-plugin-image"
import shiva_graphite from "../images/shiva_graphite.jpg"

const PortfolioGrey = () => {
  return (
    <Layout pageTitle='portfolio'>
      <PortfolioNav />
    <div className="row">
        <div className="col">
          <img src={shiva_graphite} /> 
        </div>
        <div className="col">
          <img src={shiva_graphite} /> 
        </div>
        <div className="col">
          <img src={shiva_graphite} /> 
        </div>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default PortfolioGrey   
