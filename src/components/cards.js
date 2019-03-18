import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';

import Styled from './styled';
import Banner from './banner';


const cardStyle = {
  width: '20rem',
  height: '20rem',
  background: 'linear-gradient(90deg, transparent 0%,#e9ecef 50%, transparent 100%)',
  border: 0,
  margin: '1rem',
};

const containerStyle = {
  marginBottom: '5rem',
  overflow: 'hidden',
};

const divStyle = {
  height: '15rem',
};

const prune = (string, limit) => {
  if (string.length > limit) {
    return `${string.substring(0, limit)}...`;
  }
  return string;
};

const Cards = ({ title, cards }) => (
  <div>
    <Banner title={title} />
    <div className="container" style={containerStyle}>
      {
        cards && cards.map(card => (
          <Card key={card.id} style={cardStyle} className="float-left ">
            <CardBody>
              <div style={divStyle}>
                <CardTitle>{prune(card.title, 50)}</CardTitle>
                <CardText>{prune(card.text, 200)}</CardText>
              </div>
              <Styled.DecorationlessLink to={card.slug}>
                <Button color="primary">Devamı&hellip;</Button>
              </Styled.DecorationlessLink>
            </CardBody>
          </Card>
        ))
      }
    </div>
  </div>
);

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Cards;
