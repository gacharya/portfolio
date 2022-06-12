// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import three_with_chair from "../images/three_with_chair.jpg"

const IndexPage = () => {
  return (
    <Layout pageTitle='gautham acharya'>
      <img className="homeimg" src={three_with_chair}/> 
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
