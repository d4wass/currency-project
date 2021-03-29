import Context from 'context/context';
import React from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

class Provider extends React.Component {
  state = {
    text: 'text z contextu',
  };

  handleSliderClick = (wrapper, e) => {
    const slides = wrapper.current.childNodes;
    const widthSlide = slides[0].clientWidth;

    if (e.target.id === 'left') {
      tl.to(slides, { x: `+=${widthSlide + 52}` });
    }

    if (e.target.id === 'right') {
      tl.to(slides, { x: `-=${widthSlide + 52}` });
    }
  };

  render() {
    const { text } = this.state;
    const { children } = this.props;
    return (
      <Context.Provider value={{ text, handleSliderClick: this.handleSliderClick }}>
        {children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Provider.defaultProps = {
  children: null,
};

export default Provider;
