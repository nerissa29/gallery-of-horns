// import
import React from "react";
import HornedBeast from "./components/HornedBeast.js";
import data from "./components/data.json";
import "./Main.css";
import Stack from 'react-bootstrap/Stack';


// class component
class Main extends React.Component {
  render() {
    let hornedBeast = [];

    data.forEach(animals => {
      hornedBeast.push(

        <Stack direction="horizontal" gap={3}>
          <div className="bg-light border">
            <HornedBeast
              title={animals.title}
              src={animals.image_url}
              description={animals.description}
              key={animals._id}
            />
          </div>
        </Stack>
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
