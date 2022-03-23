import React from "react";
import styled, { css } from "styled-components/macro";

const HeroSection = styled.div`
  height: 100vh;
  max-height: 360px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroWrapper>
        <h1>Hero</h1>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
