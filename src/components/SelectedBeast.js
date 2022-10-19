// import
import React from "react";
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (

      <Modal
        show = {this.props.showModal }
        onHide = {this.handleCloseModal }
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedImage}</Modal.Title>
        </Modal.Header>

      </Modal >

    )
  } 
}

// export
export default SelectedBeast;
