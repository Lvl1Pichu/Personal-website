// HomePage.tsx
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import backgroundImage from './assets/Home-Page-Forest.png';

const HomePage: React.FC = () => {
  return (
    <Background>
      <Navbar />
      <InfoDivs>
        <InfoDiv></InfoDiv>
        <InfoDiv></InfoDiv>
      </InfoDivs>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  background-image: url(${backgroundImage});
`;

// Styled components for the information divs
const InfoDivs = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px;
  display: flex;
  gap: 20px;
`;

const InfoDiv = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid white;
`;

export default HomePage;
