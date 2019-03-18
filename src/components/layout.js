import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'katex/dist/katex.min.css';
import 'github-markdown-css/github-markdown.css';

import favicon from '../images/favicon.png';
import Header from './header';
import Footer from './footer';
import './layout.css';

const title = 'Yapay Zeka Araştırma İnisiyatifi | YZAI';
const description = 'Araştırma';
const keywords = 'AI, Machine Learning, Deep Learning, Reinforcement Learning';

const Layout = ({ children }) => (
  <div className="bg-light">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: favicon },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header title={title} />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
