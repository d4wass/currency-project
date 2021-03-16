import React from 'react';
import styled from 'styled-components';
import Header from 'Components/atoms/Header';
import Paragraph from 'Components/atoms/Paragraph';
import HeaderImage from 'Components/molecules/HeaderImage';

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const StyledContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderSection = () => (
  <StyledWrapper>
    <StyledContent>
      <Header>Maker Mobile Exchange currency app</Header>
      <Paragraph>Get information about currency rating</Paragraph>
    </StyledContent>
    <StyledContent>
      <HeaderImage />
    </StyledContent>
  </StyledWrapper>
);

export default HeaderSection;
