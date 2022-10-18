// imports
import React from "react";
import Header from "./components/Header.js";
import Main from "./Main.js";
import Footer from "./components/Footer.js";
import "./App.css";



// class component
class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Main />
      <Footer />
      </>
    )
  }
}

// export
export default App;
