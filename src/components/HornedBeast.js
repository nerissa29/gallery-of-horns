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
    return (
      <>
      <Card style={{ width: '18rem', color:'#873434' }}>
      <Card.Img variant="top" src={this.props.src} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <p>{this.state.heart} Votes</p>
        <Button variant="primary" onClick={this.handleHeart}>♥️ Favorites</Button>
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
