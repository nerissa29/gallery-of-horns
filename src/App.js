// imports
import React from "react";
import Header from "./components/Header.js";
import Main from "./Main.js";
import Footer from "./components/Footer.js";
import SelectedBeast from "./components/SelectedBeast.js";
import "./App.css";
// import Modal from 'react-bootstrap/Modal';
import data from "./components/data.json";



// class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: '',
      showModal: false,
      selectedImage: {},
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

  render() {

    return (
      <>
        <Header
          heart={this.state.heart}
        />
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


        {/* <Modal 
        show={this.state.showModal}
        onHide={this.handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.state.selectedImage}</Modal.Title>
        </Modal.Header>

      </Modal> */}


      </>
    )
  }
}

// export
export default App;
