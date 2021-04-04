import React from 'react';
import { Wrapper } from 'utils/StyledComponents';
import styled from 'styled-components';
import Header from 'Components/atoms/Header';
import Input from 'Components/atoms/Input';
import Button from 'Components/atoms/Button';
import Paragraph from 'Components/atoms/Paragraph';

const StyledWrapper = styled(Wrapper)`
  justify-content: center;
  align-items: center;
`;

const StyledContentWrapper = styled.div`
  border-radius: 20px;
  border: ${({ theme }) => `solid 1px ${theme.color.yellow}`};
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledHeader = styled(Header)`
  font-size: 3rem;
`;

const StyledButton = styled(Button)`
  align-self: center;
  max-width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3vh 0;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1.6rem;
  text-align: center;
`;

const Account = () => (
  <StyledWrapper>
    <StyledContentWrapper>
      <StyledHeader>Create Account</StyledHeader>
      <StyledParagraph>
        Already have an account? <br />
        Sign in
      </StyledParagraph>
      <StyledForm>
        <Input type="text" label="login" name="login" />
        <Input type="email" label="email" />
        <Input type="password" label="password" />
        <StyledButton submit>Create Account</StyledButton>
      </StyledForm>
    </StyledContentWrapper>
  </StyledWrapper>
);

export default Account;
