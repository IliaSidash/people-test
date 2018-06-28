import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PeopleList from './PeopleList';
import Search from './Search';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border: 5px solid #eee;
  padding-top: 15px;
`;

const Main = ({
  people,
  peopleList,
  colors,
  colorForSorted,
  setActiveColor,
  handleInput,
  handleColorForFilter,
}) => (
  <Container>
    <Search
      colors={colors}
      handleInput={handleInput}
      handleColorForFilter={handleColorForFilter}
      colorForSorted={colorForSorted}
    />
    <PeopleList
      people={people}
      peopleList={peopleList}
      colors={colors}
      setActiveColor={setActiveColor}
    />
  </Container>
);

Main.propTypes = {
  people: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    activeColor: PropTypes.string,
  }).isRequired,
  peopleList: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  colorForSorted: PropTypes.string.isRequired,
  setActiveColor: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleColorForFilter: PropTypes.func.isRequired,
};

export default Main;
