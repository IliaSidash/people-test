import React from "react";
import styled from "styled-components";

const Colors = styled.div`
  display: flex;
  margin: 0 -5px;
`;

const ColorRed = styled.div`
  margin: 0 5px;
  width: 20px;
  height: 10px;
  background-color: red;
`;

const ColorGreen = ColorRed.extend`
  background-color: green;
`;

const ColorYellow = ColorRed.extend`
  background-color: yellow;
`;

export default ({ colors }) => {
  // console.log(colors[1].id);
  return (
    <Colors>
      {/* {colors.map(color => <p>{color.id}</p>)} */}
      {/* {colors.map(color => <ColorRed key={color.id} />)} */}
    </Colors>
  );
};
