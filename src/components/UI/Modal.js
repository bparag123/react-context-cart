import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

//This is a fucntion for deactivate the background of the modal
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

//This is a fucntion for dispaly the Modal
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
//Getting the element in which i will render the Component
const portalElement = document.getElementById('overlays');

//Here for modal i have used Portals to render the modal in to another component rather than hierarchy
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;