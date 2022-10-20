// import
import React from "react";
import HornedBeast from "./components/HornedBeast.js";
// import data from "./components/data.json";
import "./Main.css";
import { Form} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


// class component
class Main extends React.Component {
  render() {
    let hornedBeast = this.props.data.map(animals => {
      
      return <HornedBeast
        title={animals.title}
        src={animals.image_url}
        description={animals.description}
        key={animals._id}
        addHearts={this.props.addHearts}
        handleOpenModal={this.props.handleOpenModal}
      />
    });

    return (
      <>
        <main>


          
          <ListGroup>
          </ListGroup>
          <Form>
            <Form.Label htmlFor="name"> Name: </Form.Label>
            <Form.Control id="name" type="text" name="name"></Form.Control>

            <Form.Label htmlFor="age"> Age: </Form.Label>
            <Form.Control id="age" type="number" name="name"></Form.Control>

            <Form.Group>
              <legend>
                <Form.Select name="selectedName">
                  <option value="All">All</option>
                  <option value="1">1</option>
                </Form.Select>
              </legend>
            </Form.Group>


          </Form> 


        
          {hornedBeast}
        </main>
      </>
    )
  }
}

// export
export default Main;
