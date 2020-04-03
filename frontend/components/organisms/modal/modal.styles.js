import styled from 'styled-components';
import {
  absCenter,
  incomingEase,
  exitingEase,
} from '../../utls/mixins';

const _Children = styled.div`
  height: 100%;
`;

const _Modal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.8);
  overflow-y: hidden;
  z-index: 8999;
  transition: all 0.3s;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  @supports (-webkit-backdrop-filter: blur(10px)) or
    (backdrop-filter: blur(10px)) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(51, 51, 51, 0.3);
  }
  ${(props) =>
    props.isModalOpen
      ? `
        transition: all .4s ${incomingEase};
        opacity: 1;
        visibility: visible;
      `
      : `
        transition: all .4s ${exitingEase};
        visibility: hidden;
        opacity: 0;
  `};
`;

// TODO: Add color palette; Talk with Adam
const _ModalContent = styled.div`
  ${absCenter}
  min-height: 20vh;
  max-height: 75vh;
  width: 75%;
  min-width: 60%;
  padding: 2rem;
  border-radius: 4px;
  background-color: #fff;
  transform: translate(-50%, -50%) scale(0.25);
  text-align: justify;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  ${(props) =>
    props.isModalOpen
      ? `
      transition: all 0.3s 0.1s ${incomingEase};
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
      `
      : `
      transition: all 0.3s 0.1s ${exitingEase};
      opacity: 0;
      transform: translate(-50% ,105vh) scale(.6);
  `};
`;

const _ModalExitButton = styled.button`
  position: absolute;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  z-index: 10000;
  top: 1.2rem;
  right: 1.2rem;
  font-size: 1.6em;
  font-weight: 700;
  &::before {
    font-size: 60px;
  }
  &:focus {
    outline: none;
  }
`;

const _ModalTrigger = styled.div`
  display: ${({ modalTriggerDisplayType }) =>
    modalTriggerDisplayType};
`;

export {
  _Children,
  _Modal,
  _ModalContent,
  _ModalExitButton,
  _ModalTrigger,
};
