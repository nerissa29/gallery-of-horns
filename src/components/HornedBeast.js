// import
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// class component
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: 0,
    };
  };

  handleHeart = () => {
    // TA Justin notice the '=' in line 16, helps fix the voting issue
    this.setState ({
      heart: this.state.heart + 1,
    });
  };

  render() {
    console.log('app state', this.state);
    return (
      <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.src} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      {/* <h2>{this.props.title}</h2>
      <p>{this.state.heart} Votes</p>
      <p onClick={this.handleHeart}>♥️ Favorites</p>
      <img 
        src={this.props.src} 
        alt={this.props.alt}
        title={this.props.title} 
      />
      <p id="description">{this.props.description}</p> */}
      </>
    )
  }
}

// export
export default HornedBeast;
