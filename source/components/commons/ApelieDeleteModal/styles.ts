import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    & > div#text-wrapper {
        color: ${({ theme }) => theme.colors.text.primary};
        margin: 25px;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-self: center;
    gap: 15px;
    & > #delete-button {
        background-color: ${({ theme }) => theme.colors.error.main};
    }

    & > #back-button > span {
        color: ${({ theme }) => theme.colors.text.appPrimary};
    }
`;
const ApelieDeleteModalStyle = {
  Container,
  ButtonWrapper,
};

export default ApelieDeleteModalStyle;
