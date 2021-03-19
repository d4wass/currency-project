import React from 'react';
import styled from 'styled-components';
import Header from 'Components/atoms/Header';
import Paragraph from 'Components/atoms/Paragraph';

const StyledContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const HeaderText = () => (
  <StyledContent>
    <Header>Maker Mobile Exchange currency app</Header>
    <Paragraph>Get information about currency rating</Paragraph>
  </StyledContent>
);

export default HeaderText;
