// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import three_with_chair from "/src/images/three_with_chair.jpg"
import { withPrefix } from "gatsby"

const IndexPage = () => {
  return (
    <Layout pageTitle='gatuama'>
      <img className="homeimg" src={withPrefix(three_with_chair)}/> 
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
