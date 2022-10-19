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
    // TA Tammy helped me understand the logic using the Card container
    // TA Charlie gave the idea of creating className and adding it to the Card className for styling purposes 
    return (
      <>
      <Card className="bg-light border reactCard" style={{ width: '18rem', color:'#873434' }}>
      <Card.Img variant="top" src={this.props.src} />
      <Card.Body>
        <Card.Title onClick={this.props.addHearts}>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <p>{this.state.heart} Votes</p>
        <Button className="reactButton" variant="primary" onClick={this.handleHeart}>♥️ Favorites</Button>
      </Card.Body>
    </Card>
      </>
    )
  }
}

// export
export default HornedBeast;
