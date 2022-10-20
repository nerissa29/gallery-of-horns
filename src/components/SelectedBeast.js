// import
import React from "react";
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';


class SelectedBeast extends React.Component {
  render() {
    return (

      <Modal className="modal"
        show = {this.props.show}
        onHide = {this.props.handleCloseModal}
      >
        
        <Modal.Header className="closedBtnModal" closeButton>
          <Modal.Body>

            <img className="selectedImg" src={this.props.selectedImage} alt={this.props.title} title={this.props.title}></img>

            <Row className="row" xs={1} sm={2} md={3} lg={4}>
              {this.props.description}
            </Row>

          </Modal.Body>
        </Modal.Header>

      </Modal >

    )
  } 
}

// export
export default SelectedBeast;
