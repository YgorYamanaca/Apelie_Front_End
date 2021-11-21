import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const ModalOverlay = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5500;
`;

interface IModal {
    modalHeight: string;
}

const Modal = styled.div<IModal>`
    background: ${({ theme }) => theme.colors.background.default};
    width: 98%;
    height: ${({ modalHeight }) => modalHeight};
    border-radius: 15px;
    position: relative;
    
    padding: 15px 20px;
    & > div#close-modal-button {
        display: none;
    }
    ${breakpointsMedia({
    md: css`
        width: fit-content;
        padding: 35px;
        height: fit-content;
        & > div#close-modal-button {
            display: block;
            position: absolute;
            color: ${({ theme }) => theme.colors.text.primary};
            cursor: pointer;
            right: 10px;
            top: 15px;
        }
    `,
  })}
`;

const ApelieModalStyle = {
  Modal,
  ModalOverlay,
};

export default ApelieModalStyle;
