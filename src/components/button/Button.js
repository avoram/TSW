// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import './Button.module.css'; // Import the button's CSS file

const Button = ({ text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
