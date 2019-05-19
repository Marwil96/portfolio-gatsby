import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import CasePreview from '../components/case-preview'
import Label from '../components/common/Label.jsx'
import ProjectLink from '../components/common/ProjectLink.jsx'
import ContactLink from '../components/common/ContactLink.jsx'
import MainTextBlock from '../components/common/MainTextBlock.jsx'
import Header from '../components/common/Header.jsx'
import styling from './index.module.scss'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <div className={styling.container}>
        <Header /> 
        <MainTextBlock/>
        <Label label='Right now...' />
        <span className={styling.alertText}>Available for freelance work and new opportunities.</span>
        <Label label='Handpicked cases like a bottle of wine' />
        <div className={styling.blockContainer}>
          <ProjectLink label='Product development & Fullstack' title='Bookingsystem' />
          <ProjectLink label='UI & UX Design' title='Akademiska hus' />
          <ProjectLink label='Frontend development' title='Cryptotracker' />
        </div>
        <Label label='A SHORT TEXT ABOUT ME' />
        <span> </span>
        <div className={styling.linkText}>
          <a>WOW DID YOU READ THAT ENTIRE THING??  YOU SHOULD ALSO CHECK OF MY LAB. THIS ENTIRE BLOCK OF TEXT IS AN LINK TO THAT.</a>
          <span className={styling.nudgeText}>Is this nudging?</span>
        </div>
        <div className={styling.blockContainer}>
          <ContactLink label='Talk to me or exchange doggopics both works great.' title='Electronic mail' />
          <ContactLink label='If you want to see my code.' title='Github' />
          <ContactLink label='If you want to see cool design stuff.' title='Behance' />
          <ContactLink label='If you want to see my unpublished articles.' title='Medium' />
        </div>
      </div> 
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
