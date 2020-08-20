import React from "react";
import  {Modal} from 'react-bootstrap';
import Button from '@material-ui/core/Button';

function ModalMovie(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Tittle: {props.movie.Title}</h3>
        <span>
          <h5> Type : {props.movie.Type} </h5>
        </span>
        <span>
          <h5> Year : {props.movie.Year} </h5>
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMovie;
