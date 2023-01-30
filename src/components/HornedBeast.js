// import
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// class component
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: '',
    };
  };

  handleHeart = () => {
    // TA Justin notice the '=' in .setState, helps fix the voting issue
    this.setState ({
      // heart: this.state.heart + '♥️'
      heart: this.state.heart + '♥️'

    });
  };

  handleClearVote = () => {
    this.setState({
      heart: ''
    })
  }

  handleImageClick = () => {
    // TA Ben advised to use the image props being used, which is src and not image_url
    this.props.handleOpenModal(this.props.src)
  }


  render() {
    // TA Tammy helped me understand the logic using the Card container
    // TA Charlie gave the idea of creating className and adding it to the Card className for styling purposes 
    return (
      <>
      <Card className="bg-light border reactCard" style={{ width: '18rem', color:'#873434' }}>
      <Card.Img variant="top" onClick={this.handleImageClick} src={this.props.src} />
      <Card.Body>
        <Card.Title className="cardTitle" onClick={this.props.addHearts}>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <p>Has {this.props.horns} horns</p>
        <p>Keyword: {this.props.keyword}</p>
        <p>{this.state.heart} Votes</p>
        <Button className="reactButton" variant="primary" onClick={this.handleHeart}>♥️ Favorites</Button>
        <Button className="reactClearButton"variant="danger" onClick={this.handleClearVote}>Clear Vote</Button>
      </Card.Body>
    </Card>
      </>
    )
  }
}

// export
export default HornedBeast;
