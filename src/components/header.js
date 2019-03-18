import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import Styled from './styled';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { title } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{ title }</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Styled.DecorationlessLink className="nav-link" to="/">Anasayfa</Styled.DecorationlessLink>
              </NavItem>
              <NavItem>
                <Styled.DecorationlessLink className="nav-link" to="/news/">Haberler</Styled.DecorationlessLink>
              </NavItem>
              <NavItem>
                <Styled.DecorationlessLink className="nav-link" to="/projects/">Projeler</Styled.DecorationlessLink>
              </NavItem>
              <NavItem>
                <Styled.DecorationlessLink className="nav-link" to="/about">Hakkımızda</Styled.DecorationlessLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
