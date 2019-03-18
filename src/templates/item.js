import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import {
  Layout,
  Banner,
} from '../components';


const Item = ({ data }) => {
  const { markdownRemark: { html, frontmatter: { title } } } = data;
  return (
    <Layout>
      <Banner title={title} />
      <div className="container markdown-body">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

Item.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Item;
