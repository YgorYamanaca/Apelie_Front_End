import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
    display: flex;
    position: relative;
    gap: 15px;
    padding: 15px 10px;
    background-color: ${({ theme }) => theme.colors.background.default};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.divider};
    & > #store-info-edit-icon {
        position: absolute;
        top: 0;
        right: 0;
    }

    ${breakpointsMedia({
    md: css` 
            padding: 25px;
        `,
  })}
`;

interface IUserPhotoContainer {
    imgUrl: string
}

const UserPhotoContainer = styled.div<IUserPhotoContainer>`
    position: relative;
    min-width: 75px;
    height: 75px;
    background-image: url(${({ imgUrl }) => imgUrl});
    background-position: center;
    background-size: cover;
    border: 3px solid ${({ theme }) => theme.colors.background.paper};

    ${breakpointsMedia({
    md: css`
        border-radius: 0%;
        width: 100px;
        height: 100px;
        margin-top: 0;
        `,
  })}
`;

const StoreInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    & > #store-detail-and-rating {
        display: flex;
        flex-direction: column;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
        gap: 5px;
        & > #store-state-rating {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 25px;
            & > #store-location {
                display: flex;
                flex-direction: column;
            }
        }
    }

    & > #store-description {
        display: flex;
        flex-direction: column;
        & > label {
            font-weight: bold;
        }
        & > p {
            text-indent: 10px;
        }
    }

    & > #store-contact {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        & > label {
            font-weight: bold;
            & > span {
                margin-left: 5px;
            }
        }
    }
`;

const ApelieStoreResumeStyle = {
  Container,
  UserPhotoContainer,
  StoreInfoContainer,
};

export default ApelieStoreResumeStyle;
