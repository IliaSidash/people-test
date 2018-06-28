import React from 'react';
import styled from 'styled-components';

import ColorPicker from './ColorPicker';

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

class SearchComponent extends React.Component {
  state = {
    value: '',
    activeColor: '',
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { activeColor } = this.state;
    const { updatePeopleList } = this.props;

    this.setState({
      value,
    });

    updatePeopleList(value, activeColor);
  };

  handleColor = (color) => {
    const { value } = this.state;
    const { updatePeopleList } = this.props;

    this.setState(
      (prevState) => {
        if (prevState.activeColor === color) {
          return {
            activeColor: null,
          };
        }
        return {
          activeColor: color,
        };
      },
      () => {
        const { activeColor } = this.state;
        updatePeopleList(value, activeColor);
      },
    );
  };

  render() {
    const { colors } = this.props;
    const { activeColor } = this.state;

    return (
      <Search>
        <Input onChange={this.handleChange} value={this.state.value} placeholder="Поиск" />
        <ColorPicker colors={colors} filterByColor={this.handleColor} activeColor={activeColor} />
      </Search>
    );
  }
}
export default SearchComponent;
