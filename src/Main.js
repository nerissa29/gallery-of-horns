// import
import React from "react";
import HornedBeast from "./components/HornedBeast.js";
// import data from "./components/data.json";
import "./Main.css";

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
        horns={animals.horns}
      />
    });

    return (
      <>
        <main>        
          {hornedBeast}
        </main>
      </>
    )
  }
}

// export
export default Main;
