import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSVG = styled.svg`
  position: absolute;
  bottom: ${({ bottom }) => (bottom === 0 ? 'none' : bottom)};
  top: ${({ top }) => (top === 0 ? 'none' : top)};
  left: ${({ left }) => (left === 0 ? 'none' : left)};
  right: ${({ right }) => (right === 0 ? 'none' : right)};
`;

const Circle = ({ cx, cy, r, height, width, fill, bottom, top, left, right }) => (
  <StyledSVG height={height} width={width} bottom={bottom} top={top} left={left} right={right}>
    <circle cx={cx} cy={cy} r={r} fill={fill} />
  </StyledSVG>
);

Circle.propTypes = {
  cx: PropTypes.string.isRequired,
  cy: PropTypes.string.isRequired,
  r: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  bottom: PropTypes.string,
  top: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
};

Circle.defaultProps = {
  bottom: 'none',
  top: 'none',
  left: 'none',
  right: 'none',
};

export default Circle;
