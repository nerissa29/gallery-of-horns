// imports
import React from "react";
import Header from "./components/Header.js";
import Main from "./Main.js";
import Footer from "./components/Footer.js";
import SelectedBeast from "./components/SelectedBeast.js";
import "./App.css";
import data from "./components/data.json";
import {Form, Button} from 'react-bootstrap';


// class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: '',
      showModal: false,
      selectedImage: {},
      name: '',
      selectedHorns: {},
      formData: data,
      // search bar
      searchInput: '',
    }

  }

  addHearts = () => {
    this.setState({
      heart: this.state.heart + '♥️'
    })
  }

  // TA Tammy introduced the .find()
  handleOpenModal = (image_url) => {
    // .find() from MDN Docs
    const selectedBeast = data.find(beasts => beasts.image_url === image_url)
    console.log(image_url);

    this.setState({
      showModal: true,
      selectedImage: selectedBeast.image_url,
      title: selectedBeast.title,
      description: selectedBeast.description,
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }


  // form event handlers
  handleSubmit = (event) => {
    event.preventDefault();
    
    this.setState({
      selectedHorns: event.target.selectedHorns.value,
      name: event.target.name.value
    })
  }

  handleInput = (event) => {
    let userName = event.target.name.value;
    this.setState({
      name: userName
    })
  }

  handleSelect = (event) => {
    let selectedHorns = event.target.value;

    if (selectedHorns === 'one') {
      let newFormData = data.filter(num => num.horns === 1);
      this.setState({
        formData: newFormData
      })
    } else if (selectedHorns === 'two') {
      let newFormData = data.filter(num => num.horns === 2);
      this.setState({
        formData: newFormData
      })
    } else if (selectedHorns === 'three') {
      let newFormData = data.filter(num => num.horns === 3);
      this.setState({
        formData: newFormData
      })
    } else if (selectedHorns === 'one-hundred') {
      let newFormData = data.filter(num => num.horns === 100);
      this.setState({
        formData: newFormData
      }) 
    } else {
      this.setState({
        formData: data
      })
    }
  }

  // search bar event handler
  handleSubmitSearch = (event) => {
    event.preventDefault();
    
    this.setState({
      searchInput: event.target.searchInput.value
    })
  }

  handleInputSearch = (event) => {
    let userInput = event.target.value;
    
    console.log(userInput);
    let newFormData = data.filter(element => element.keyword.includes(userInput))
    this.setState({
      formData: newFormData
    })
  }

  render() {

    return (
      <>

        <Header
          heart={this.state.heart}
          handleSubmitSearch={this.handleSubmitSearch}
          handleInputSearch={this.handleInputSearch}
          data={this.state.formData}
        />

        <main>
          <Form onSubmit={this.handleSubmit}>
            <Form.Label htmlFor="name"> Name: </Form.Label>
            <Form.Control id="name" type="text" name="name" onInput={this.handleInput}></Form.Control>

            <Form.Label htmlFor="age"> Age: </Form.Label>
            <Form.Control id="age" type="number" name="name"></Form.Control>

            <Form.Group>
              <legend>
                <Form.Label htmlFor="selectedHorns">Select Beasts by Number of Horns</Form.Label>
                <Form.Select id="selectedHorns" name="selectedHorns" onChange={this.handleSelect}> 
                  <option value="All">All</option>
                  <option value="one">1</option>
                  <option value="two">2</option>
                  <option value="three">3</option>
                  <option value="one-hundred">100</option>
                </Form.Select>
              </legend>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </main>

        <Main
          addHearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}
          data={this.state.formData}
        />

        <SelectedBeast
          show={this.state.showModal}
          onHide={this.state.handleCloseModal}
          handleCloseModal={this.handleCloseModal}
          selectedImage={this.state.selectedImage}
          title={this.state.title}
          description={this.state.description}
        />

        <Footer />

      </>
    )
  }
}

// export
export default App;
