import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Question } from 'assets/question-solid.svg';

const StyledWrapperIcon = styled.a`
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
`;

const StyledQuestion = styled(Question)`
  height: 20px;
`;

const StyledWrapper = styled.div`
  width: 100%;
  max-height: 100px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const Help = () => (
  <StyledWrapper>
    <StyledWrapperIcon>
      <StyledQuestion as={Question} />
    </StyledWrapperIcon>
  </StyledWrapper>
);

export default Help;
