import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>🙈</h1>
    <h3>
      Oh man. I think the owner mentioned the first part of the unlock code is a dish he loves to eat.
    </h3>
    <h3>
      The only thing is that I can't quite remember what went into the dish!
    </h3>
    <h3>
      Using your friends out there, please help me determine 3 of the main ingredients!
    </h3>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
