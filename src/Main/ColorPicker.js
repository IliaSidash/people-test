import React from "react";
import styled from "styled-components";

const Colors = styled.div`
  display: flex;
  margin: 0 -5px;
`;

const Color = styled.div`
  margin: 0 5px;
  width: 25px;
  height: 15px;
  cursor: pointer;
  background-color: ${props => props.fill};
  border: 3px solid;
  border-color: ${props => (props.active ? "#000" : "#fff")};
`;

const colors = [
  {
    id: "red",
    color: "red"
  },
  {
    id: "yellow",
    color: "yellow"
  },
  {
    id: "green",
    color: "green"
  }
];

const getColor = (id, color, activeColor, func) => {
  if (color === activeColor) {
    return <Color key={id} fill={color} active onClick={() => func(color)} />;
  }
  return <Color key={id} fill={color} onClick={() => func(color)} />;
};

export default ({ activeColor, setActiveColor }) => {
  return (
    <Colors>
      {colors.map(color =>
        getColor(color.id, color.color, activeColor, setActiveColor)
      )}
    </Colors>
  );
};
