import styled from 'styled-components';

const Container = styled.div`
    padding-top: 10px;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 25px;

    & > div.close-modal-button {
        color: ${({ theme }) => theme.colors.text.primary};
        cursor: pointer;
    }
`;

const Modal = styled.div`
    background: ${({ theme }) => theme.colors.background.default};
    width: fit-content;
    border-radius: 15px;
    padding: 15px;
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5500;
`;

const ApelieModalStyle = {
  Container,
  ModalHeader,
  Modal,
  ModalOverlay,
};

export default ApelieModalStyle;
