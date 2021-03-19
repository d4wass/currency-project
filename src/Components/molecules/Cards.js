import React from 'react';
import styled from 'styled-components';
import Card from 'Components/atoms/Card';
import { options } from 'utils/Options';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Cards = () => (
  <StyledWrapper>
    {options.map((option) => (
      <Card option={option} />
    ))}
  </StyledWrapper>
);

export default Cards;
