import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import CasePreview from '../components/case-preview'
import Label from '../components/common/Label.jsx'
import ProjectLink from '../components/common/Label.jsx'
import styling from './index.module.scss'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <div className={styling.container}>
        <div className={styling.header}>
          <span> William Martinsson </span>
          <a href="#lab">Lab</a>
        </div>
        <h3>Design driven developer.<br/> Who believes in a world where developers and designers can live together. </h3>
        <span>Some will call me a Digital designer others U who loves to develop unique interactive experiences. Currently doing my internship at Momkai in Amsterdam.</span>
        <Label label='Right now...' />
        <span className="alert-text">Available for freelance work and new opportunities.</span>
        <Label label='Handpicked cases like a bottle of wine' />
        <ProjectLink label='Product development & Fullstack' title='Bookingsystem' />
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
