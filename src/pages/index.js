import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to the 🙈🙉🙊 cafe!</h1>
    <h2>
      Sorry about the hassle but I need one last thing to finish up dinner. Unfortunately, I've locked myself out of the Cafe and my assistants are just useless without some help. Can you help them unlock the door and grab the last thing? Thanks!
    </h2>
    <h2>
      The only thing is that only one person can fit in the entrance at a time. Send one person out.
    </h2>
    <h2>
      Before we begin though... It looks like my assistants would like to see if you're up to the task:
    </h2>
    <br />
    <br />
    <br />
    <h2>
      Problem:
    </h2>
    <h3>
In a remote prison somewhere in South America, three prisoners are serving a life sentence. The guards decide to play a game with the inmates to pass the time.

They have a trunk of hats, and they show the prisoners there are five hats in the trunk—three black hats and two white hats. The guards make the prisoners sit in chairs and line them up three in a row, such that the prisoner in the back of the line can see the two in front of him, the prisoner in the middle can see the one person in front of him, and the prisoner in the front can see nothing but the prison wall.
    </h3>
    <h3>
    The guards blindfold the prisoners, and place a hat on each of their heads. They then remove the blindfolds and tell the inmates that they can go free if they correctly name the color of the hat they have on—but if they guess wrong, they will be shot dead. Needless to say, the prisoners cannot see what color hat they have on their own head.

    The guards first ask the prisoner in the back of the line, "what color hat do you have on?" He says he doesn't know. They ask the man in the middle, and he also doesn't know. When the guards ask the prisoner in the front of the line what color hat he has on, he answers correctly, and goes free.

    What color hat did he have on, and how did he know?
    </h3>
    <br />
    <br />
    <br />
    <br />
    <h2>
    My assistants are impressed with you all! Go see them individually to try and open up the cafe.
    </h2>
    <div className='homepage__link'>
      <Link to="/page-2/">🙈 Come see me for some help!</Link>
    </div>
    <div className='homepage__link'>
      <Link to="/page-3/">🙉 Don't listen to anyone else! I'm here to help!</Link>
    </div>
    <div className='homepage__link'>
      <Link to="/page-4/">🙊 Say no more. I'll be of help to you!</Link>
    </div>
  </Layout>
)

export default IndexPage
