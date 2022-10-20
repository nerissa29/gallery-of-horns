// imports
import React from "react";
import Header from "./components/Header.js";
import Main from "./Main.js";
import Footer from "./components/Footer.js";
import SelectedBeast from "./components/SelectedBeast.js";
import "./App.css";
import data from "./components/data.json";



// class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: '',
      showModal: false,
      selectedImage: {},
      selectedHorns: {},
      formData: data,
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

  // for form submit
  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {

    

    return (
      <>

        

        <Header
          heart={this.state.heart}
        />

        {/* <main>
          <ListGroup></ListGroup>
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
        </main> */}

        <Main
          addHearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}
          data={data}
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
