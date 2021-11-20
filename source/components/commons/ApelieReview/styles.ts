import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.background.default};
  justify-content: flex-start;
  flex-direction: column;
  padding: 25px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  ${breakpointsMedia({
    md: css`
        width: 100%;
        height: fit-content;
        padding: 25px 15px;
        max-width: 75%;
    `,
  })}
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  & > :first-child {
    display: flex;
    margin-right: 15px;
  }
  & > #user-name-and-rating {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 70%;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

    & > span {
      word-break: break-all;
    }
  }


  ${breakpointsMedia({
    md: css`
      flex-direction: row;
      align-items: flex-end;
      & > :first-child {
        display: flex;
        margin-right: 15px;
      }
      & > #user-name-and-rating {
        width: 92%;
      }
    `,
  })}
`;

const UserReviewContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 15px;
  word-break: break-all;

  & > p {
    text-indent: 10px;
    text-align: justify;
    letter-spacing: 1px;
  }
`;

const ApelieReviewStyles = {
  Container,
  UserInfoContainer,
  UserReviewContainer,
};

export default ApelieReviewStyles;
