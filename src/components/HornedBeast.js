// import
import React from "react";


// class component
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: 0
    }
  }

  handleHeart = () => {
    this.setState = {
      heart: this.state.heart + 1
    }
  }

  render() {
    return (
      <>
      <h2>{this.props.title}</h2>
      <p onClick={this.handleHeart}>♥️ favorites</p>
      <img 
        src={this.props.src} 
        alt={this.props.alt}
        title={this.props.title} 
      />
      <p id="description">{this.props.description}</p>
      </>
    )
  }
}

// export
export default HornedBeast;
