import React from 'react';
import { Button } from 'reactstrap';

import {
  Layout,
  Social,
  Styled,
} from '../components';

import Logo from '../images/logo.png';


const IndexPage = () => (
  <Layout>
    <Styled.CenteredJumbotron>
      <div>
        <img className="img-fluid" alt="Logo" width="128" src={Logo} />
      </div>
      <h1 className="display-3">Yapay Zeka Araştırma İnisiyatifi</h1>
      <p className="lead">
          Proje tabanlı çalışma grubu
      </p>
      <hr className="my-2" />
      <p>
          Çalışmalarımız bu site üzerinden yayınlanacaktır.
      </p>
      <p className="lead">
        <Styled.DecorationlessLink to="news">
          <Button color="primary">Haberler</Button>
        </Styled.DecorationlessLink>
      </p>
    </Styled.CenteredJumbotron>
    <Styled.TransparentJumbotron className="container">
      <h1 className="display-5">Yapay Zeka Araştırma İnisiyatifi</h1>
      <br />
      <p>
        Topluluk, yapay zeka alanında projeler geliştirmek amacıyla oluşturulmuştur.
      </p>
      <br />
      <div className="lead">
        <Social />
      </div>
    </Styled.TransparentJumbotron>
  </Layout>
);

export default IndexPage;
