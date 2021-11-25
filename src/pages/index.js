import * as React from "react"
import CompaniesTagWorkedFor from "../components/companies-tag-worked-for";
import DetailsAboutme from "../components/details-aboutme";
import IntroHeadlines from "../components/intro-headlines";
import LetsWorkTogether from "../components/lets-work-together";
import ProjectsBrief from "../components/projects-brief";
import TalksThoughts from "../components/talks-thoughts";
import Testimonials from "../components/testimonials";
import TopHeader from '../components/top-header';
import '../index.css'
import Helmet from 'react-helmet'
// styles
const homePageStyle = {
  padding: '0px',
  width: '100%',

}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={homePageStyle} data-testid="home-page">
      <Helmet title="Rahul Rana -  Frontend Engineer Uber SDE II " defer={false} >
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap" rel="stylesheet"></link>
            </Helmet>
      <TopHeader />
      <IntroHeadlines />
      <DetailsAboutme />
      <CompaniesTagWorkedFor />
      <ProjectsBrief/>
      <TalksThoughts />
      <Testimonials />
      <LetsWorkTogether/>
    </main>
  )
}

export default IndexPage
