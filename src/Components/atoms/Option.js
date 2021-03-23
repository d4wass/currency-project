import React from 'react';
import styled from 'styled-components';
import Paragraph from 'Components/atoms/Paragraph';
import { ReactComponent as Icon } from 'assets/check.svg';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

const StyledIcon = styled(Icon)`
  height: 100%;
  width: 20px;
  margin-right: 20px;

  path {
    fill: yellow;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1.3rem;
`;

const Option = ({ option }) => (
  <StyledWrapper>
    <StyledIcon />
    <StyledParagraph>{option}</StyledParagraph>
  </StyledWrapper>
);

Option.propTypes = {
  option: PropTypes.string.isRequired,
};

export default Option;
