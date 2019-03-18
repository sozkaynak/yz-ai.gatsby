import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import {
  Layout,
  Cards,
} from '../components';


const Projects = ({ data }) => {
  const cards = [];
  const { allMarkdownRemark: { edges } } = data;

  edges.forEach(({ node }) => {
    cards.push({
      id: node.id,
      title: node.frontmatter.title,
      text: node.frontmatter.text,
      slug: node.fields.slug,
    });
  });

  return (
    <Layout>
      <Cards title="Haberler" cards={cards} />
    </Layout>
  );
};

Projects.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              text: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]},
      filter: {fileAbsolutePath: {regex: "/(news)/.*\\.md$/"}}
   ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            text
          }
        }
      }
    }
  }
`;

export default Projects;
