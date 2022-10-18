// import
import React from "react";


// class component
class HornedBeast extends React.Component {
  render() {
    return (
      <>
      <h2>{this.props.title}</h2>
      <img 
        src={this.props.src} 
        alt={this.props.alt}
        title={this.props.title} 
      />
      <p>{this.props.description}</p>
      </>
    )
  }
}

// export
export default HornedBeast;
