import styled from 'styled-components';

interface IStyleApelieUserPhoto {
  imgUrl: string,
  size: number
}

const Container = styled.div<IStyleApelieUserPhoto>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.secondary.main};
`;

const StyleApelieUserPhoto = {
  Container,
};

export default StyleApelieUserPhoto;
