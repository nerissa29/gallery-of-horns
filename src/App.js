// imports
import React from "react";
import Header from "./components/Header.js";
import Main from "./Main.js";
import Footer from "./components/Footer.js";
import "./App.css";



// class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: ''
    }

  }

  addHearts = () => {
    this.setState({
      heart: this.state.heart + '♥️'
    })
  }

  render() {
    return (
      <>
      <Header 
        heart = {this.state.heart}
      />
      <Main 
        addHearts={this.addHearts}     
      />
      <Footer />
      </>
    )
  }
}

// export
export default App;
