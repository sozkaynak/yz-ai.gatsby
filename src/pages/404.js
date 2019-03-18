/*
* TODOs
* https://github.com/gatsbyjs/gatsby/issues/2389
* https://www.gatsbyjs.org/packages/gatsby-remark-images/
* Markdown + Math
*/

import React from 'react';
import { Button } from 'reactstrap';

import {
  Layout,
  Banner,
  Styled,
} from '../components';

const NotFoundPage = () => (
  <Layout>
    <Banner title="404 Sayfa Bulunamadı" />
    <Styled.TransparentJumbotron className="container">
      <p className="lead">
        Anasayfaya dönmek için tıklayınız.
        <br />
        <br />
        <Styled.DecorationlessLink to="/">
          <Button color="primary">Anasayfa</Button>
        </Styled.DecorationlessLink>
      </p>
    </Styled.TransparentJumbotron>
  </Layout>
);

export default NotFoundPage;
