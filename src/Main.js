// import
import React from "react";
import HornedBeast from "./components/HornedBeast.js";
import data from "./components/data.json";
import "./Main.css";


// class component
class Main extends React.Component {
  render() {
    let hornedBeast = [];

    data.forEach(animals => {
      hornedBeast.push(
      
        <HornedBeast
          title={animals.title}
          src={animals.image_url}
          description={animals.description}
          key={animals._id}
        />

      )
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
