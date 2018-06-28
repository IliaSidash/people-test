import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Result = styled.div`
  text-align: right;
  max-width: 400px;
`;

const Text = styled.span`
  margin-right: 5px;

  :last-child {
    margin-left: 5px;
  }
`;

const ResultComponent = ({ people, peopleList }) => (
  <Result>
    <Text>
Найдено:
    </Text>
    {peopleList.length}
    <Text>
из
    </Text>
    {Object.keys(people).length}
  </Result>
);

ResultComponent.propTypes = {
  people: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    activeColor: PropTypes.string,
  }).isRequired,
  peopleList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ResultComponent;
