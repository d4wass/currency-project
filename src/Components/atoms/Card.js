import React from 'react';
import styled from 'styled-components';
import Option from 'Components/atoms/Option';
import Button from 'Components/atoms/Button';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 350px;
  border: solid 1px #fff;
  border-radius: 20px;
  /* background-color: rgba(255, 255, 255, 0.4); */
  padding: 20px 30px;
  margin: 0 30px;
`;

const StyledOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  margin: 20px 0;
  padding: 15px;
`;

const StyledTitle = styled.h3`
  color: #fff;
  font-size: 3.5rem;
  margin: 15px 0;
`;

const StyledSubtitle = styled.h5`
  color: #fff;
  font-weight: ${({ theme }) => theme.font.weight.light};
`;

const Card = ({ values }) => {
  const { title, subtitle, options, price } = values;
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledOptionWrapper>
        {options.map((item) => (
          <Option option={item} />
        ))}
      </StyledOptionWrapper>
      <StyledTitle>{price}</StyledTitle>
      <Button>Choose</Button>
    </StyledWrapper>
  );
};

Card.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.string,
  }).isRequired,
};

export default Card;
