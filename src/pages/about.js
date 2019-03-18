import React from 'react';

import {
  Layout,
  Banner,
  Styled,
  Social,
} from '../components';

const About = () => (
  <Layout>
    <Banner title="Hakkımızda" />
    <Styled.TransparentJumbotron>
      <div className="container">
        <p>
          Yapay Zeka Araştırma İnisiyatifi, 2019&#39;un bahar aylarında
          kurulmuş olup, kendi yağında kavrulmaya çalışan bir kaç
          aktif üyeden oluşan ve bu üyeler ile proje tabanlı çalışmalar
          yürütmeyi amaçlayan kar amacı gütmeyen bir topluluktur.
        </p>
        <br />
        <div className="lead">
          Bize Ulaşmak için:
          <br />
          <br />
          <Social />
        </div>
      </div>
    </Styled.TransparentJumbotron>
  </Layout>
);

export default About;
