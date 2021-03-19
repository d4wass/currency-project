import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import Option from 'Components/atoms/Option';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 200px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 20px 30px;
`;

const StyledTitle = styled.h3`
  color: #fff;
`;

const StyledSubtitle = styled.h5`
  color: #fff;
`;

const Card = ({ title, subtitle, price, options }) => (
  <StyledWrapper>
    <StyledTitle>{title}</StyledTitle>
    <StyledSubtitle>{subtitle}</StyledSubtitle>
    {console.log(options, title)}
    <StyledSubtitle>{price}</StyledSubtitle>
  </StyledWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
