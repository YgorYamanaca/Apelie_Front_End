import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 15px;
    padding: 15px 10px;
    background-color: ${({ theme }) => theme.colors.background.default};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.divider};
    box-shadow: ${({ theme }) => theme.shadow.nivel1};
    & > #store-info-edit-icon {
        display: flex;
        height: fit-content;
        position: absolute;
        bottom: 5px;
        right: 5px;
    }

    ${breakpointsMedia({
    md: css` 
            padding: 25px;
            min-width: 500px;
            flex-direction: row;
            & > #store-info-edit-icon {
                display: flex;
                position: absolute;
                top: 0px;
                right: 5px;
                bottom: 0px;
            }

        `,
  })
}
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
    ${breakpointsMedia({
    md: css`
        flex: 1;
    `,
  })}
`;

const ApelieStoreResumeStyle = {
  Container,
  UserPhotoContainer,
  StoreInfoContainer,
};

export default ApelieStoreResumeStyle;
