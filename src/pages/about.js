import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle='about'>
      <p className='abouttext'>----</p>
      <p className='abouttext'>gautama is an artist working in seattle, washington</p>
      <p className='abouttext'>operating from within a framework of immigration and cultural exchange, his drawings explore the spatiotemporal transmission, mutation, and decay of culture and memory</p>
      <p className='abouttext'>his work is continuously re-processed -- drawn, digitally altered, and painted upon -- in cycles mimicking biocultural drift</p>
      <p className='abouttext'>----</p>
      <p className='abouttext'>gautacharya@gmail.com</p>
      <p className='abouttext'>425.495.9622</p>
      <p className='abouttext'>----</p>
    </ Layout>
  )
}
// Step 3: Export your component
export default AboutPage
