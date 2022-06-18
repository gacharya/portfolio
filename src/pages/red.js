// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import PortfolioNav from '../components/portfolio_nav'
import { StaticImage } from "gatsby-plugin-image"
import guru_product_shot from "../images/guru_pure.jpg"
import ganesh_product_shot from "../images/ganesha_pure.jpg"
import shiva_product_shot from "../images/shiva_pure.jpg"
import shiva_graphite from "../images/shiva_graphite.jpg"
import figure from "../images/figure.jpg"

const PortfolioRed = () => {
  return (
    <Layout pageTitle='portfolio'>
      <PortfolioNav />
      <p className='abouttext'>----</p>
      <p className='abouttext'>a series of studies on the transmutation of culture across spatial and temporal dimensions. 
</p>
      <p className='abouttext'>iconography from the south asian subcontinent is rendered on sparse white backgrounds, stripped of traditional ornamentation and color</p>
      <p className='abouttext'>the work has been drawn, digitally altered, and then painted upon, exploring the transition to the new aesthetics paradigms of the information era</p>
      <p className='abouttext'>----</p>
    <div className="row">
        <div className="col">
          <img src={ganesh_product_shot }/> 
        </div>
      <div className="col">
          <img src={shiva_product_shot }/> 
        </div>
        <div className="col">
          <img src={guru_product_shot }/> 
        </div>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default PortfolioRed  
