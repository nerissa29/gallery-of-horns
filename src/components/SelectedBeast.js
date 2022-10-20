// import
import React from "react";
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (

      <Modal
        show = {this.props.show}
        onHide = {this.props.handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Body>
            {/* test */}
            <img src={this.props.selectedImage} alt={this.props.title}></img>
          </Modal.Body>
        </Modal.Header>

      </Modal >

    )
  } 
}

// export
export default SelectedBeast;
