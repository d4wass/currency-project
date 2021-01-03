import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'Components/organisms/Navbar';

const MainTemplate = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
