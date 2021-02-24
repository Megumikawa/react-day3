import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import Total from './components/Total'
import Items from './components/Items'

class App extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Items />
          </Col>
          <Col>
            <Total />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App 