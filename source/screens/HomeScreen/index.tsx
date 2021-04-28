import React from 'react';
import HomeBox from './styles';

const HomeScreen: React.FC = () => (
  <HomeBox.Container>
    <HomeBox.ImageBox>
      <img
        src="/images/Home/Home-Animated-Image.svg"
        alt="ApelieHomeImg"
      />
    </HomeBox.ImageBox>
    <HomeBox.StoresBox>

    </HomeBox.StoresBox>
  </HomeBox.Container>
);

export default HomeScreen;
