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
  border-color: ${({ active }) => (active ? '#000' : '#fff')};
`;

const getColor = (color, activeColor, setActiveColor, filterByColor) => {
  if (filterByColor) {
    return (
      <Color
        key={color}
        fill={color}
        active={activeColor === color}
        onClick={() => filterByColor(color)}
      />
    );
  }
  if (color === activeColor) {
    return <Color key={color} fill={color} active onClick={() => setActiveColor(color)} />;
  }
  return <Color key={color} fill={color} onClick={() => setActiveColor(color)} />;
};

const ColorPickerComponent = ({
  activeColor, colors, setActiveColor, filterByColor,
}) => (
  <Colors>
    {colors.map(color => getColor(color, activeColor, setActiveColor, filterByColor))}
  </Colors>
);

ColorPickerComponent.defaultProps = {
  setActiveColor: () => null,
};

ColorPickerComponent.propTypes = {
  activeColor: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  setActiveColor: PropTypes.func,
  filterByColor: PropTypes.func,
};

export default ColorPickerComponent;
