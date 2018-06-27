import React from "react";
import styled from "styled-components";

import ColorPicker from "./ColorPicker";

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #000;
`;

const Input = styled.input`
  border: none;
  flex-grow: 1;
`;

const colors = [
  {
    id: "red",
    color: "red",
    active: true
  },
  {
    id: "yellow",
    color: "yellow",
    active: false
  },
  {
    id: "green",
    color: "green",
    active: false
  }
];

class SearchComponent extends React.Component {
  state = { value: "" };

  handleChange = e => {
    const value = e.target.value;
    const { updatePeopleList } = this.props;

    this.setState({
      value
    });

    updatePeopleList(value);
  };

  render() {
    return (
      <Search>
        <Input
          onChange={this.handleChange}
          value={this.state.value}
          placeholder="Поиск"
        />
        <ColorPicker colors={colors} />
      </Search>
    );
  }
}
export default SearchComponent;
