import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle = "Home Page">
      <p> home page content </p>
      <StaticImage
        alt = "Clifford a"
        src = "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
      /> 
    </Layout>
  )
}

export default IndexPage;
