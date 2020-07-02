import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={3}>
            <h2>My Notes</h2>
          </Col>
          <Col md={9}>
            col2
          </Col>
        </Row>
      </Container>
    );
  }

}

export default App;
