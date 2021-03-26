import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Wrapper } from 'utils/StyledComponents';
import Header from 'Components/atoms/Header';
import Paragraph from 'Components/atoms/Paragraph';
import { addLogo } from 'utils/Companies';

const StyledWrapper = styled(Wrapper)`
  height: 100%;
  border-radius: 20px;
  border: 1px solid #fff;
  padding: 40px;
  margin: 20px;
  flex-direction: column;
  height: 500px;
  min-width: 650px;
`;

const StyledHeader = styled(Header)`
  font-size: 3.6rem;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.font.weight.light};
`;

const Slide = ({ item }) => {
  const { logo, name, content, rating } = item;

  return (
    <StyledWrapper>
      {addLogo(logo)}
      <StyledHeader>{name}</StyledHeader>
      <StyledParagraph>{content}</StyledParagraph>
      <StyledParagraph>{rating}</StyledParagraph>
    </StyledWrapper>
  );
};

Slide.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string,
      name: PropTypes.string,
      content: PropTypes.string,
      rating: PropTypes.number,
    }),
  ).isRequired,
};

export default Slide;
