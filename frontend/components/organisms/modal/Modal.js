import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  _Children,
  _Modal,
  _ModalContent,
  _ModalExitButton,
  _ModalTrigger,
} from './modal.styles';

/**
 * To close the modal based on a child element, add "close-modal-trigger to the class"
 **/
function Modal({
  children,
  className,
  isOpen,
  modalTrigger,
  modalTriggerDisplayType,
  onChange,
}) {
  const modalRef = useRef(null);
  const [isModalOpen, setModalState] = useState(isOpen);

  // onChange callback
  useEffect(() => {
    onChange({ isModalOpen });
  }, [isModalOpen]);

  //   Handler for keypress (state it set to closed if esc is pressed)
  const closeOnEsc = ({ key }) => {
    if (key === 'Escape') setModalState(false);
  };

  // Closes modal when an outside click occurs
  const closeModalOnOutsideClick = (e) => {
    const clickedClass = e.target.className;
    const outsideClickClass = modalRef.current.className;

    if (clickedClass === outsideClickClass) {
      setModalState(false);
    }
  };

  // Checks if an element should close the modal
  const shouldClickClose = (e) => {
    const clickedClass = e.target.className;
    // To close the modal based on a child element, add "close-modal-trigger to the class"
    if (clickedClass.includes('close-modal-trigger'))
      setModalState(false);
  };

  // Handles what happens when ANYTHING is clicked
  const handleOnClick = (e) => {
    closeModalOnOutsideClick(e);
    shouldClickClose(e);
  };

  return (
    <>
      <_Modal
        className={className}
        isModalOpen={isModalOpen}
        tabIndex="0"
        onKeyDown={(e) => closeOnEsc(e)}
        onClick={(e) => handleOnClick(e)}
        ref={modalRef}
      >
        <_ModalContent isModalOpen={isModalOpen}>
          <_ModalExitButton onClick={() => setModalState(false)}>
            &#10005;
          </_ModalExitButton>
          {children}
        </_ModalContent>
      </_Modal>
      {/* Anything clicked here will toggle the modal to true*/}
      {!!modalTrigger && (
        <_ModalTrigger
          modalTriggerDisplayType={modalTriggerDisplayType}
          onClick={() => setModalState(true)}
        >
          {modalTrigger}
        </_ModalTrigger>
      )}
    </>
  );
}

Modal.defaultProps = {
  isOpen: true,
  modalTriggerDisplayType: 'inline-block',
  onChange: () => {},
};

Modal.propTypes = {
  /**
   * Content in modal when it's open
   */
  children: PropTypes.node,
  /**
   * Custom styling
   */
  className: PropTypes.string,
  /**
   * Toggle for open/close state
   */
  isOpen: PropTypes.bool,
  /**
   * Component to toggle open/close state
   */
  modalTrigger: PropTypes.node,
  /**
   * display property for modal trigger ex. "block/inline-block"
   */
  modalTriggerDisplayType: PropTypes.string,
  /**
   * callback for open/close changes  uplifts {isOpen}
   */
  onChange: PropTypes.func,
};

export default Modal;
