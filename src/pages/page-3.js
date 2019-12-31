import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>🙉</h1>
    <h3>
      Oh man. I think the owner mentioned the second part of the unlock code is a song that he loves.
    </h3>
    <h3>
      The only thing is that I can't quite remember what song it is!
    </h3>
    <h3>
      Using your friends out there, please help me determine the song!
    </h3>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
