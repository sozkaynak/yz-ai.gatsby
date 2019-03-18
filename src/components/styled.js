import styled from 'styled-components';
import { Link } from 'gatsby';
import { Jumbotron } from 'reactstrap';


const Styled = {
  DecorationlessLink: styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  `,
  CenteredJumbotron: styled(Jumbotron)`
    text-align: center;
  `,
  TransparentJumbotron: styled(Jumbotron)`
  && {
    background-color: transparent;
  }
  `,
};

export default Styled;
