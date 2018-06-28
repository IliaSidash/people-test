import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Colors = styled.div`
  display: flex;
  margin: 0 -5px;
`;

const Color = styled.div`
  margin: 0 5px;
  width: 25px;
  height: 15px;
  cursor: pointer;
  background-color: ${({ fill }) => fill};
  border: 3px solid;
  border-color: ${({ active }) => (active ? 'blue' : 'white')};
`;

const ColorPickerComponent = ({ activeColor, colors, handleClick }) => (
  <Colors>
    {colors.map(color => (
      <Color
        key={color}
        fill={color}
        active={activeColor === color}
        onClick={() => handleClick(color)}
      />
    ))}
  </Colors>
);

ColorPickerComponent.propTypes = {
  activeColor: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ColorPickerComponent;
