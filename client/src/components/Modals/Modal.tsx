import React, { Fragment, useState } from 'react';
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from './styles';
import { ModalCreateProps } from './types';

const Modal = ({ active, title, children, hideModal }: ModalCreateProps) => {
  return (
    <Fragment>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <ModalClose onClick={() => hideModal()}>
                <div className='close'>Close</div>
              </ModalClose>
            </ModalHeader>
            <hr />
            <ModalBody>{children}</ModalBody>
            {/* <ModalFooter>{footer}</ModalFooter> */}
          </ModalContainer>
        </ModalBlock>
      )}
    </Fragment>
  );
};

export default Modal;
