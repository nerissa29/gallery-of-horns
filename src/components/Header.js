// import
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// class component
class Header extends React.Component {
  render() {
    return(
      <header>

        <Row>
          <Col className="headerCol">
            <h1>Welcome to the Animal Section! {this.props.heart}</h1>
          </Col>

          <Col>
            <Form className="d-flex searchBar">
              <Form.Control 
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

          </Col>
      </Row>
        

        

      </header>
    )
  }
}

// export
export default Header 
