import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledSVG = styled.div`
  position: absolute;
  border-radius: 50%;
  height: ${({ height }) => height && `${height}px`};
  width: ${({ width }) => width && `${width}px`};
  bottom: ${({ bottom }) => (bottom === 0 ? 'none' : bottom)};
  top: ${({ top }) => (top === 0 ? 'none' : top)};
  left: ${({ left }) => (left === 0 ? 'none' : left)};
  right: ${({ right }) => (right === 0 ? 'none' : right)};

  background-color: ${({ color }) => color && color};
  background-image: ${({ color, noBg, gradient }) =>
    !noBg && `linear-gradient(315deg, ${color} 0%, ${gradient} 74%)`};

  ${({ glass }) =>
    glass &&
    css`
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(5px);
    `}
`;

const Circle = ({ height, width, color, bottom, top, left, right, noBg, gradient, glass }) => (
  <StyledSVG
    height={height}
    width={width}
    color={color}
    noBg={noBg}
    bottom={bottom}
    top={top}
    left={left}
    right={right}
    gradient={gradient}
    glass={glass}
  />
);

Circle.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  bottom: PropTypes.string,
  top: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  color: PropTypes.string.isRequired,
  noBg: PropTypes.bool,
  glass: PropTypes.bool,
  gradient: PropTypes.string,
};

Circle.defaultProps = {
  bottom: 'none',
  top: 'none',
  left: 'none',
  right: 'none',
  gradient: '#000000',
  noBg: false,
  glass: false,
};

export default Circle;
