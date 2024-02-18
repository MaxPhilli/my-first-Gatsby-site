// Step 1: Import React
import * as React from 'react'
import Layout from '/src/components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '/src/components/seo.js'

// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle="I HAVE YOUR FAMILY">
      <StaticImage
      alt="YOUR HOME"
      src="C:\Users\maxhp\my-gatsby-site\src\images\Yourhome.jpg"
      />
      <p> I know where you live. </p>
      <p> I have your family. </p>
      <p> I am holding them for ransom</p>
      <p> Deposit $920,000 into my account by wednesday and you'll see your family again</p>
      </Layout>
    
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page"/>

// Step 3: Export your component
export default IndexPage