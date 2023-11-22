import React from "react";
import "./About.css";
import { Row, Col } from "react-bootstrap";

function About() {
  return (
    <div>
      <Row>
        <Col>
          <div className="aboutimg">
            <img
              alt="cool office"
              src="https://www.e-architect.com/wp-content/uploads/2017/04/150-north-riverside-chicago-office-tower-g210417-1.jpg"
            />
          </div>
        </Col>
        <Col>
          <h1>Welcome to Deus Vult!</h1>
          <p>
            <strong>
              We are delighted to have you among us. On behalf of all the
              members and the management, we would like to extend our warmest
              welcome and good wishes! Welcome to the team! We are thrilled to
              have you at our office. You're going to be a valuable asset to our
              company, and we can't wait to see all that you accomplish. The
              entire team of Deus Vult is thrilled to welcome you on board. We
              hope you'll do some amazing work here! A warm welcome and lots of
              good wishes on becoming part of our growing team. Congratulations
              and on behalf of all the members. We are all happy and excited
              about your input and contribution to our company.
            </strong>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default About;
