import { useState } from "react";
import Navbar from "./Pages/NavBar";

// import { Col, Row } from "rsuite";
// import CustomNav from "./Pages/CustomNav";

import '../assets/css/layout.css'

export default function Layout() {
  const [active, setActive] = useState('home');
  return (
    <div>
      <Navbar />
      {/* <Row>
        <Col md={4}>
            <CustomNav active={active} onSelect={setActive} />
        </Col>
      </Row> */}
    </div>
  )
}
