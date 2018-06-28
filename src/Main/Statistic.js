import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { values } from 'lodash/fp';

const Statictic = styled.div`
  margin-left: 20px;
  margin-top: 20px;
`;

const Quantity = styled.div``;

const Text = styled.span`
  margin-right: 5px;
`;

const StaticticComponent = ({ people }) => {
  const red = values(people).filter(person => person.activeColor === 'red');
  const yellow = values(people).filter(person => person.activeColor === 'yellow');
  const green = values(people).filter(person => person.activeColor === 'green');

  return (
    <Statictic>
      <Quantity>
        <Text>
Всего красных:
        </Text>
        {red.length}
      </Quantity>
      <Quantity>
        <Text>
Всего желтых:
        </Text>
        {yellow.length}
      </Quantity>
      <Quantity>
        <Text>
Всего зеленых:
        </Text>
        {green.length}
      </Quantity>
    </Statictic>
  );
};

StaticticComponent.propTypes = {
  people: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    activeColor: PropTypes.string,
  }).isRequired,
};

export default StaticticComponent;
