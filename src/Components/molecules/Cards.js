import React from 'react';
import styled from 'styled-components';
import Card from 'Components/atoms/Card';
import { options } from 'utils/Options';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Cards = () => (
  <StyledWrapper>
    {options.map((item) => (
      <Card values={item} />
    ))}
  </StyledWrapper>
);

export default Cards;
