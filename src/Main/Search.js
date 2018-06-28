import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { handleInput } = this.props;

    this.setState({
      value,
    });
    handleInput(value);
  };

  render() {
    const { colors, colorForSorted, handleColorForFilter } = this.props;
    const { value } = this.state;
    return (
      <Search>
        <Input onChange={this.handleChange} value={value} placeholder="Поиск" />
        <ColorPicker
          colors={colors}
          activeColor={colorForSorted}
          handleClick={handleColorForFilter}
        />
      </Search>
    );
  }
}

SearchComponent.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  colorForSorted: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleColorForFilter: PropTypes.func.isRequired,
};
export default SearchComponent;
