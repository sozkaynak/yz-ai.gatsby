import React from 'react';

import Styled from './styled';


const jumbotronStyle = {
  margin: 0,
};

const Footer = () => (
  <div>
    <Styled.CenteredJumbotron style={jumbotronStyle}>
      Türkiye&#x27;nin en büyük yapay zeka topluluğu.
    </Styled.CenteredJumbotron>
  </div>
);

export default Footer;
