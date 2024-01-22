import { Nav, Row, Col } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} vertical activeKey={active} onSelect={onSelect} style={{ width: 100 }}>
      <Nav.Item eventKey="home" icon={<HomeIcon />}>
        Home
      </Nav.Item>
      <Nav.Item eventKey="news">News</Nav.Item>
      <Nav.Item eventKey="solutions">Solutions</Nav.Item>
      <Nav.Item eventKey="products">Products</Nav.Item>
      <Nav.Item eventKey="about">About</Nav.Item>
    </Nav>
  );
};

export default CustomNav;
