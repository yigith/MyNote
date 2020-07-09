import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';
import './style.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios.get('/notes.json').then((response) => {
      this.setState({
        notes: response.data
      });
      console.log(response.data);
    });
  }

  newNote = () => {
    const notes = this.state.notes;
    notes.push({
      "Id": 3,
      "Title": "New Note",
      "Content": "sample string 3",
      "CreationTime": "2020-07-09T21:43:28.4485525+03:00",
      "ModificationTime": "2020-07-09T21:43:28.4485525+03:00"
    });
    this.setState({ notes });
  }

  render() {
    const listGroupItems = this.state.notes.map((value, index) => (
      <ListGroup.Item action href={"#link" + index} key={index}>
        value.Title
      </ListGroup.Item>
    ));
    return (
      <Container fluid>
        <Row>
          <Col md={3}>
            <h4>My Notes</h4>
            <ListGroup defaultActiveKey="#link0">
              {listGroupItems}
            </ListGroup>
          </Col>
          <Col md={9}>
            col2

            <button onClick={this.newNote}>Add Note</button>
          </Col>
        </Row>
      </Container>
    );
  }

  alertClicked() {
    alert('You clicked the third ListGroupItem');
  }

}

export default App;
