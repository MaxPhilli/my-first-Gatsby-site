import * as React from 'react'
import Layout from '/src/components/layout'
const AboutPage = () => {
  return (
  
      <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <p>please help me</p> 
      </Layout>
   
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage