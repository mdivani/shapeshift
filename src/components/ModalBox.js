import React from 'react';
import Modal from 'react-modal';

const ModalBox = (props) => (
    <Modal 
        isOpen={props.isOpen}
        ariaHideApp={props.ariaHideApp}
        closeTimeoutMS={200}
        shouldCloseOnOverlayClick={true}
    >
        {props.children}
    </Modal>
);

export default ModalBox;