import React from 'react';
import Modal from 'react-modal';
import ModalContent from './ModalContent';

const ModalBox = (props) => (
    <Modal 
        isOpen={props.isOpen}
        ariaHideApp={props.ariaHideApp}
    >
        <ModalContent
            handleSelectCoin={props.handleSelectCoin} 
        />
    </Modal>
);

export default ModalBox;