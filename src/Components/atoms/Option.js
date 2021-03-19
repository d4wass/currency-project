import React from 'react';
import styled from 'styled-components';
import Paragraph from 'Components/atoms/Paragraph';
import { ReactComponent as Icon } from 'assets/check.svg';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Option = ({ option }) => (
  <StyledWrapper>
    <Icon />
    <Paragraph>{option}</Paragraph>
  </StyledWrapper>
);

Option.propTypes = {
  option: PropTypes.string.isRequired,
};

export default Option;
