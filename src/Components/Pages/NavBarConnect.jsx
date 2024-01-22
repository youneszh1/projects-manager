import { Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarConnect = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} activeKey={active} onSelect={onSelect} style={{ marginBottom: 50 }}>
      <Nav.Item target='/home' eventKey="home" icon={<HomeIcon />}>
        Home
      </Nav.Item>
      <Link to='/home'>home test</Link>
      <Nav.Item eventKey="news">News</Nav.Item>
      <Nav.Item eventKey="solutions">Solutions</Nav.Item>
      <Nav.Item eventKey="products">Products</Nav.Item>
      <Nav.Item eventKey="about">About</Nav.Item>
    </Nav>
  );
};

export default NavbarConnect;
