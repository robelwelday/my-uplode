import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import teamImage from '../assets/team.jpg';

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>We are a team of dedicated professionals...</p>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img src={teamImage} alt="Our dedicated team" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;